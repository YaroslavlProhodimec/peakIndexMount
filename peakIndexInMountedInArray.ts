let arr1 = [11, 13, 14, 15, 6, 4, 2];

const peakIndexInMountedInArray = (array) => {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let middle = Math.floor((start + end) / 2);

    if (array[middle] < array[middle + 1]) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
};

console.log(peakIndexInMountedInArray(arr1));