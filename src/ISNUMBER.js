
export default function ISNUMBER(value) {
    return typeof(value) === 'number' && !isNaN(value) && isFinite(value);
}
