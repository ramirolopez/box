import {RANGE} from './RANGE';

export function GT(a,b) {
  var aIsRange = a.constructor.name === 'RANGE',
      bIsRange = b.constructor.name === 'RANGE';

  if ( aIsRange && bIsRange  ) {
    return error.na;
  } else if ( aIsRange ) {
    return a.data().map( (d) => d > b ); 
  } else if (bIsRange) {
    return b.data().map( (d) => d > a ); 
  } else {
    return a > b;
  }
}
