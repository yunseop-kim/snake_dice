const isOdd = (n) => Math.abs(n % 2) === 1;
const isEven = (n) => (n % 2) === 0;
function chunk(array, size) {
    const result = [];
    let index = 0;
    while (index < array.length) {
        result.push(array.slice(index, size + index));
        index += size;
    }
    return result;
}

export {
    isOdd,
    isEven,
    chunk
}