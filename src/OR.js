import FLATTEN from './FLATTEN';

export default function OR(...criteria) {
  return FLATTEN(criteria).reduce( (a, b) => {
    return (a || b);
  })
}
