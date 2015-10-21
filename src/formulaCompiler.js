// Copyright 2015 Peter W Moresi
import {parser} from 'formula-ast';

function wrapString(s) {
  if (s[0] == "'" && s[s.length-1] === "'") {
    return s;
  }
  return '\'' + s + '\'';
}

var compiledNumber = 0;

export function compile(exp, namespace="requires.") {
  var ast = exp,
      jsCode,
      functionCode,
      f,
      suppress = false,
      precedents = [],
      requires = []; 
  
  // convert to AST when string provided
  if (typeof ast === 'string') {
    ast = parser.parse(exp);
  } 

  function printItems(items) {
    return items.map(function(n){ 
      return compiler( n );
    }).join(', ')
  }

  function pushRequires(require) {
    if (requires.indexOf(require) === -1) {
      requires.push('formula-' + require);
    }
  }
  
  // define a compiler function to handle recurse the AST.
  function compiler( node ) {
    
    let lhs, rhs;
    
    // The node is expected to be either an operator, function or a value.
    switch(node.type) {
      case 'operator':
        switch(node.subtype) {
          case 'prefix-plus':
            return '+' + compiler( node.operands[0] );
          case 'prefix-minus':
            return '-' + compiler( node.operands[0] );
          case 'infix-add':
            pushRequires('add');
            return namespace + "ADD(" + compiler( node.operands[0] ) + ', ' +
                   compiler( node.operands[1]) + ")";
          case 'infix-subtract':
            pushRequires('subtract');
            return (namespace + "SUBTRACT(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");
          case 'infix-multiply':
            pushRequires('multiply');
            return (namespace + "MULTIPLY(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");
          case 'infix-divide':
            pushRequires('divide');
            return (namespace + "DIVIDE(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");
          case 'infix-power':
            pushRequires('power');
            return (namespace + 'POWER(' + compiler( node.operands[0] ) + ', ' 
                  + compiler( node.operands[1] ) + ')');
          case 'infix-concat':
            lhs = compiler( node.operands[0] );
            rhs = compiler( node.operands[1] );
            pushRequires('concatenate');
            return namespace + "CONCATENATE(" + wrapString(lhs) + ', ' + wrapString(rhs) + ")";
          case 'infix-eq':
            pushRequires('eq');
            return (namespace + "EQ(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");                
          case 'infix-ne':
            pushRequires('ne');
            return (namespace + "NE(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");                                
          case 'infix-gt':
            pushRequires('gt');
            return (namespace + "GT(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");                                
          case 'infix-gte':
            pushRequires('gte');
            return (namespace + "GTE(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");                                
          case 'infix-lt':
            pushRequires('lt');
            return (namespace + "LT(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");                                
          case 'infix-lte':
            pushRequires('lte');
            return (namespace + "LTE(" + compiler( node.operands[0] ) + ', ' +
                    compiler( node.operands[1]) + ")");                
        }
        throw TypeException("Unknown operator: " + node.subtype);
      case 'group':
        return ('(' +  compiler( node.exp ) + ')');
      case 'function':
        pushRequires(name);
        return (namespace + node.name + '( ' + printItems(node.args) + ' )');
      case 'cell':
        if (typeof precedents !== "undefined" && !suppress) { precedents.push(node); }
        
        if (node.subtype === "remote") {
          return 'context.get(\"' + node.worksheet + '\", \"' + node.addr + '\")';
        } else {
          return 'context.get(\"' + node.addr + '\")';
        }
      case 'range':
        
        if (typeof precedents !== "undefined") { precedents.push(node); suppress = true; }
        lhs = compiler(node.topLeft);
        rhs = compiler(node.bottomRight);
        suppress = false;
        
        // anonymous functions are the perfect solution for dynamic ranges but was not immediately obvious to me
        if ( node.topLeft.type === "function" ) {
          lhs = "function() { return (" + lhs + "); }"
        }
        
        if ( node.bottomRight.type === "function" ) {
          rhs = "function() { return (" + rhs + "); }"
        }
        
        return ('context.range( ' + lhs + ', ' + rhs + ' )' );
        
      case 'value':
        switch (node.subtype) {
          case 'array':
            return ('[' + printItems(node.items) + ']');
          case 'string':
            return "'" + node.value.replace(/'/g, "''") + "'";
          case 'variable':
            
            if (precedents && !suppress) { precedents.push(node); }
            
            if (node.subtype === "remote-named") {
              return 'context.get(\"' + node.worksheet + '\", \"' + node.value + '\")';
            } else {
              return 'context.get(\"' + node.value + '\")';
            }
            
            
          default:
            return node.value;
        }
    }
  }
  
  
  var id = compiledNumber++;

  var compiled = compiler(ast);
  var code = '// formula: ' + exp + '\n' +
             'return (' + compiled + ');' + '\n' +
             '//@ sourceURL=formula_function_' + id +  '.js';
  
  f = Function('context', 'requires', code);
  
  f.id = id;
  f.exp = exp;
  f.ast = ast;
  f.code = compiled;
  f.precedents = precedents;
  f.requires = requires;
  f.resolve = function() {
    return this.requires.reduce( function(out, n) {
      out[n.substr(8).toUpperCase()] = require(n);
      return out;
    }, {} );
  }
  
  return f;
  
}
