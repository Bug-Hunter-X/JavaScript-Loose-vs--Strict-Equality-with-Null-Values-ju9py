function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values using strict equality
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

//Always use strict equality (===) when comparing values for equality, especially when dealing with null, undefined, or 0 to prevent unexpected results due to type coercion.