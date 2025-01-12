function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

function bar(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(bar(null, 5)); // Output: 0
console.log(bar(5, null)); // Output: 0
console.log(bar(5, 5)); // Output: 10

//What's the difference between foo and bar?
//The difference lies in the use of strict equality (===) in foo and loose equality (==) in bar.
//Loose equality (==) performs type coercion before comparison, while strict equality (===) does not.
//In the context of null and 0, loose equality considers them equal, whereas strict equality does not.