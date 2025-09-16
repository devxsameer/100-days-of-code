console.log("JS Recursion");

function sumRange(n) {
  if (n <= 1) return n;
  return n + sumRange(n - 1);
}

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorial(n - 1);
}

function all(arr, cb) {
  if (arr.length === 0) return true;
  return cb(arr[0]) ? all(arr.slice(1), cb) : false;
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function contains(object, searchValue) {
  if (typeof object !== "object" || object === null) {
    return object === searchValue;
  }

  for (const value of Object.values(object)) {
    if (contains(value, searchValue)) {
      return true;
    }
  }
  return false;
}

function totalIntegers(arr) {
  if (arr.length === 0) return 0;
  let total = 0;
  if (Number.isInteger(arr[0])) total += 1;
  else if (Array.isArray(arr[0])) total += totalIntegers(arr[0]);
  return total + totalIntegers(arr.slice(1));
}

function SumSquares(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  if (Number.isInteger(arr[0])) {
    sum += arr[0] * arr[0];
  } else if (Array.isArray(arr[0])) {
    sum += SumSquares(arr[0]);
  }
  return sum + SumSquares(arr.slice(1));
}

function replicate(times, val) {
  if (times <= 0) return [];
  return [val, ...replicate(times - 1, val)];
}
