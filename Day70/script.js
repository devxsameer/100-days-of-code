console.log("JS Recursion");

// Project Euler Problem 1
function sumOfMultiples(n, a, b) {
  if (n <= 0) return 0;
  let current = n % a === 0 || n % b === 0 ? n : 0;
  return current + sumOfMultiples(n - 1, a, b);
}

// Project Euler Problem 2
function sumEvenFibs(a = 1, b = 2, limit = 4000000, sum = 0) {
  if (a > limit) return sum; // base case: stop when we exceed the limit

  if (a % 2 === 0) sum += a; // add if even

  return sumEvenFibs(b, a + b, limit, sum); // recurse with next numbers
}

// Project Euler Problem 3

function largestPrimeFactor(n, factor = 2) {
  // Base case: if n is prime itself
  if (n === 1) return factor;

  // If divisible by factor, divide and recurse
  if (n % factor === 0) {
    return largestPrimeFactor(n / factor, factor);
  }

  // Otherwise, try next factor
  return largestPrimeFactor(n, factor + 1);
}
