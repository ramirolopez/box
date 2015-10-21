import FLATTEN from 'formula-flatten';

export default function OR() {
  return FLATTEN(arguments).reduce( (a, b) => {
    return (a || b);
  })
}
