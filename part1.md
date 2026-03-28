## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative
      Answer: A program is defined as a sequence of commands, and running the program is simply the execution of these commands one after the other.
   1. [5 points] Object Oriented
      Answer: A program is defined by creating objects and passing messages (calling methods) between these objects.
   1. [5 points] Functional
      Answer: A program is fundamentally an expression or a series of expressions, and running the program means computing the value of the expression rather than executing a sequence of commands. It utilizes functions as values (higher-order functions) and strictly avoids side-effects.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?
    Answer: The Object-Oriented paradigm improves over the imperative paradigm by encapsulating data and behavior. In standard procedural imperative programming, logic can quickly become overly complex to manage, and shared mutable state makes code verification very difficult. Object-Oriented programming structures this state into independent objects that pass messages to one another, drastically improving organization.
1. [5 points] How does the functional paradigm improve over the object oriented paradigm?
    Answer: The Functional paradigm improves upon the Object Oriented paradigm by completely eliminating shared mutable state and side-effects. While Object Oriented objects inherently encapsulate state that mutates over time (which can still cause concurrency and verification issues), functional programming relies on pure functions and immutable data, returning new values instead of changing existing ones. This lack of side-effects makes functional code much easier to verify, parallelize, and abstract.

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

Answer: 
```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  const discountedProducts = inventory.filter(product => product.discounted);
  return discountedProducts.length === 0
    ? 0
    : discountedProducts
      .map(product => product.price)
      .reduce((acc, cur) => acc + cur, 0) / discountedProducts.length;
}
```

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
    Type: <T>(x: T[], y: (val: T) => boolean) => boolean
2. [3 points] `x => x.map(y => y * 2)`
    Type: (x: number[]) => number[]
3. [3 points] `(x, y) => x.filter(y)`
    Type: <T>(x: T[], y: (val: T) => boolean) => T[]
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
    Type: (x: number[]) => number
5. [3 points] `(x, y) => x ? y[0] : y[1]`
    Type: <T>(x: boolean, y: T[]) => T
6. [3 points] `(f,g) => x => f(g(x+1))`
    Type: <T, U>(f: (val: T) => U, g: (val: number) -> T) => (x: number) => U