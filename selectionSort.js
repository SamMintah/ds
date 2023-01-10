function selectionSort(array) {
    let min;
    for (let i = 0; i < array.length - 1; i++) {
        min = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[min]) min = j
        }
        if (i !== min ) {
            let temp = array[i]
            array[i] = array[min]
            array[min] = temp
        }
    }
    return array;
}
let myarray = [ 2,5,8,4,6,3,1,7]

console.log(selectionSort(myarray))
