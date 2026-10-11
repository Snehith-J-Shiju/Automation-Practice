function secondHighest(arr) {
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);

  return arr[1];
}

console.log(secondHighest([10, 5, 20, 20, 8]));
// 10