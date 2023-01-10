  function bubbleSort(array){
   for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        if (array[j] > array[j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
        }
    }
   }
   return array
  }

  

  let myarray = [ 2,5,8,4,6,3,1,7]

  console.log(bubbleSort(myarray))