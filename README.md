# JavaScript Loose vs. Strict Equality with Null Values

This repository demonstrates a common, yet subtle, JavaScript bug related to loose (==) versus strict (===) equality when dealing with null values.  The example shows how type coercion during loose equality can lead to unexpected behavior.

## Bug Description
The provided code showcases two functions, `foo` and `bar`.  Both intend to handle null values by returning 0 if either input is null. However, they differ in their use of equality operators: `foo` uses strict equality (`===`), while `bar` uses loose equality (`==`). This seemingly minor difference has significant implications when null values are involved.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using a JavaScript environment (e.g., Node.js).
3. Observe the output, noting the unexpected behavior resulting from the use of loose equality.

## Solution
The solution (`bugSolution.js`) demonstrates the proper use of strict equality (`===`) to reliably handle null values without unexpected type coercion.