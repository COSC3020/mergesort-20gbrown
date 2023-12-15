//code.js
function mergesort(array) {
    if (array == null || array.length <= 1) {
        return array;
    }

    const len = array.length;
    //const aux = new Array(len);

    function merge(start, mid, end) {
        let leftIndex = start;
        let rightIndex = mid;

        while (leftIndex < rightIndex && rightIndex < end) {
            if (array[leftIndex] <= array[rightIndex]) {
                leftIndex++;
            } else {
                const temp = array[rightIndex];

                for (let i = rightIndex; i > leftIndex; i--) {
                    array[i] = array[i - 1];
                }

                array[leftIndex] = temp;

                leftIndex++;
                rightIndex++;
            }
        }
    }

    for (let size = 1; size < len; size *= 2) {
        for (let start = 0; start < len; start += 2 * size) {
            const mid = Math.min(start + size, len);
            const end = Math.min(start + 2 * size, len);
            merge(start, mid, end);
        }
    }

    return array;
}










    
    