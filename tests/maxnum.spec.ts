function findMax(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}
console.log("The maximum number is: " + findMax([1, 2, 3, 4, 5, 1, 2, 6])); // Output: 6