import FLATTEN from './FLATTEN';

export default function OR() {
  return FLATTEN(arguments).reduce( (a, b) => {
    return (a || b);
  })
}
