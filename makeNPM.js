var packages = require('./packageList').packages,
    fs=require('fs'),
    exec=require('child_process').execSync;

packages.forEach( (packageName, i) => {

  // 1. make a directory
  if (!fs.existsSync('../' + packageName)) {
    console.log("MAKE: " + packageName);
    
    fs.mkdirSync('../' + packageName);

  // 2. create a package.json files
  var content =
`{
  "name": "formula-${packageName}",
  "version": "0.0.1",
  "description": "${packageName.toUpperCase()} function",
  "main": "${packageName.toUpperCase()}.js",
  "scripts": {
    "test": "node test"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/FormulaPages/${packageName}.git"
  },
  "author": "Peter Moresi",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/FormulaPages/${packageName}/issues"
  },
  "homepage": "https://github.com/FormulaPages/${packageName}#readme"
}`

  fs.writeFileSync('../' + packageName + '/package.json', content);

    // 3. run npm publish
   //exec('npm publish', { cwd: packageName });
  } else {
    console.log("SKIP: " + packageName);
  }
});
