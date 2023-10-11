function mergesort(arr) {
    if (arr.length <= 1 || arr == null) {
        return arr;
    }

    const len = arr.length;
    const aux = new Array(len);

    for (let size = 1; size < len; size *= 2) {
        for (let start = 0; start < len; start += 2 * size) {
            const left = Math.min(start + size, len);
            const right = Math.min(start + 2 * size, len);
            merge(arr, aux, start, mid, end);
        }
    }

    return arr;
}

function merge(arr, aux, start, mid, end) {
    let leftIndex = start;
    let rightIndex = mid;

    for (let i = start; i < end; i++) {
        aux[i] = arr[i];
    }

    for (let i = start; i < end; i++) {
        if (leftIndex < mid && (rightIndex >= end || aux[leftIndex] <= aux[rightIndex])) {
            arr[i] = aux[leftIndex];
            leftIndex++;
        } else {
            arr[i] = aux[rightIndex];
            rightIndex++;
        }
    }
}








    
    