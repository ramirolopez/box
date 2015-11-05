
export default function(value) {
    return typeof(value) === 'number' && !isNaN(value) && isFinite(value);
}
