function mergesort(array) {
    if (array == null || array.length <= 1) {
        return array;
    }

    const len = array.length;
    const aux = new Array(len);

    for (let size = 1; size < len; size *= 2) {
        for (let start = 0; start < len; start += 2 * size) {
            const mid = Math.min(start + size, len);
            const end = Math.min(start + 2 * size, len);

            let leftIndex = start;
            let rightIndex = mid;

            for (let i = start; i < end; i++) {
                aux[i] = array[i];
            }

            for (let i = start; i < end; i++) {
                if (leftIndex < mid && (rightIndex >= end || aux[leftIndex] <= aux[rightIndex])) {
                    array[i] = aux[leftIndex];
                    leftIndex++;
                } else {
                    array[i] = aux[rightIndex];
                    rightIndex++;
                }
            }
        }
    }

    return array;
}








    
    