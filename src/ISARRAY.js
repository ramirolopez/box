
export function ISARRAY(arr) {
    return Object.prototype.toString.call( arr ) === '[object Array]';
}
