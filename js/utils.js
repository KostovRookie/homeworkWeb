
export function findMaxValueInArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }
    return Math.max(...array);
}

export function findMinValueInArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }
    return Math.min(...array);
}

export function findAverageValueInArray(array) {
    if (!Array.isArray(array) || array.length === 0) {
        return undefined;
    }
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}