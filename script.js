// given array of integer return square in sorted ascending order
// [-4,-3,-5,9,-7,19,1,8,4] ==> []


const getSorterArr = (arr) => {
  const newArray = new Array(arr.length).fill(0)
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = arr[i] * arr[i]
  }
  newArray.sort((a, b) => a - b)
  return newArray

}

const arr =  [-4,-3,-5,9,-7,19,1,8,4] 

console.log(getSorterArr(arr))

console.log(getSorterArr([]))