function merge(arr1 ,arr2) {
    let combined = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i]);
            i++
        } else {
            combined.push(arr2[j]);
            j++
        }
    }

    while (i < arr1.length) {
         combined.push(arr1[i]);
            i++
    }

    while (j < arr2.length) {
        combined.push(arr2[j])
        j++
    }

    return combined
}

function mergeSort(array) {
    if (array.length === 1) return array
    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)

   return merge(mergeSort(left),mergeSort(right))
}


let myarray = [2,5,8,4,6,3,1,7]
// let myarr2 = [6,3,1,7]
// [1,3,7,8] , [2,4,5,6]
console.log(mergeSort(myarray))

