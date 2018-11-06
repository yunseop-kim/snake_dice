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

function flatten(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // 스택에서 값을 pop
        const next = stack.pop();
        if (Array.isArray(next)) {
            // 배열 항목을 다시 push, 원래 인풋을 수정하지 않음
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    //입력 순서를 복구하기 위한 reverse
    return res.reverse();
}

export {
    isOdd,
    isEven,
    chunk,
    flatten
}