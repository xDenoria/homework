function sorting(arr, sortingType) {
       if (sortingType !== 'по возрастанию' && sortingType !== 'по убыванию') {
        return arr;
    }
    const sortedArray = [...arr];
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
            if ((sortingType === 'по возрастанию' && sortedArray[j] > sortedArray[j + 1]) || (sortingType === 'по убыванию' && sortedArray[j] < sortedArray[j + 1])) {  
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }
    return sortedArray;
}
const numbers = [1, 40, -5, 10, 0];
console.log(sorting(numbers, 'по возрастанию'));
console.log(sorting(numbers, 'по убыванию')); 