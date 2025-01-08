// linearSearch

function linearSearch(arrayList, index) {
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i] === index) {
      return `the index of value is: ${i}`;
    }
  }
  return "not found";
}

const arr = [9, 1, 8, 2, 7, 3, 6, 4, 5];

console.log(linearSearch(arr, 9));

// runtime complexity : O (n)
// cons : slow for large data sets
// pros: fast for searches of small to medium data sets
// does not need to be sorted
// useful for data struct that do not have random access ( linked list )
