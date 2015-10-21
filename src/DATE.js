import SERIAL from 'formula-serial';

export default function DATE(year, month, day) {
  return SERIAL(new Date(year, month-1, day));
}   
