function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([5, 2, 8, 1, 3, 6]));