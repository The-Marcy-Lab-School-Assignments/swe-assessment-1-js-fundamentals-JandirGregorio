# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

I identified a **ReferenceError**. The `currentStatus` variable is declared inside both the `if` and `else` statements. That makes `currentStatus` a local variable inside the `if-else` estatements. After the `isReuben` boolean is evaluated to either `true` or `false`, we exit the statement and `currentStatus` will not exist anymore. To fix, we can **declare** `currentStatus` using `let` before going into the `if-else` statement and reassign the variable inside.

```js
const react = (isReuben) => {
  // declare using let as we want to update `currentStatus`
  let currentStatus;
  if (isReuben) {
    currentStatus = "Everything is just fine";
  } else {
    currentStatus = "Time to panic.";
  }

  console.log(currentStatus);
};

react(true);
```

### Question 2

What does the following code log? Explain why.

```javascript
let bestPlayer = { name: "Lebron James" };
let theGOAT = bestPlayer;
bestPlayer.name = "Michael Jordan";
console.log(theGOAT.name);
```

This **code block** will log

```bash
{
    name: "Michael Jordan"
}
```

It looks like they try to assign a copy of `bestPlayer` to `theGOAT`. The problem is that **Objects** are a **Reference Type** in **JavaScript**. Instead of assigning a copy of the object to `theGOAT` variable, they assign a reference to `bestPlayer`. Both `bestPlayer` and `theGOAT` are now pointing to the same reference in **the heap**. Therefore, when they try reassign the `theGOAT`'s name **property**, they are also updating `bestPlayer`.

### Question 3

```javascript
const theHustler = "Laisha";

const shoutOut = () => {
  const theHustler = "Paul";
  console.log(`${theHustler} is the hardest working person in the room.`);
};

shoutOut();
console.log(`${theHustler} is also the hardest working person in the room.`);
```

This code will log the following to the terminal:

```bash
'Paul is the hardest working person in the room.'
'Laisha is the hardest working person in the room.'
```

### Question 4

**Functions** in **JavaScript** usually take a fixed number of parameters, and when invoking the function, we use the same number of **arguments**. However, let's say we wanted a function that takes an indefinite number of parameters. Instead of writing several functions with specific numbers of parameters, we can use **rest parameters**. They allow you to pass in as many **arguments** to the function in the form of an **array**.

To turn a regular _parameter_ to a _rest paremeter_, we add three dots `...` before the parameter's name.

To deepen our understanding, I'll build a `sum` function that takes _any_ number of integers as arguments and returns their sum.

```js
// creates a function that takes in a rest parameter of numbers
const sum = (...nums) => {
  // declare variable to store the total sum of numbers
  let totalSum = 0;
  // iterate through nums and add to `totalSum`
  for (const num of nums) {
    totalSum += num;
  }
  return totalSum;
};

sum(1, 2, 10); // 13
sum(5); // 5
sum(100, 200, 800, 1, 1, 1); // 1103;
```

### Question 5

According to MDN, in **JavaScript** the scope is the current context of execution in which values and expressions are "visible" or can be referenced.

You can think of scope like a **school campus**. Anyone can acess the campus and the things that exist within it. For example, the student lounge. This is considered **global scope**, as it's easily accessible by any student with access to campus. Inside a classroom, there are unique things to that room, such as a whiteboard or desks. This is considered **local scope**, as you can't access these things if you are in another room.

Let's illustrate this with a simple function:

```js
const studentLounge = "Welcome to our student lounge!";

const welcomeToLounge = () => {
  console.log(studentLounge);
};

const campusClassroom = () => {
  const welcomeToClass = "Welcome to class! Feel free to use the whiteboard.";
  console.log(welcomeToClass);
};

welcomeToLounge(); // 'Welcome to our student lounge!'
campusClassroom(); // 'Welcome to class! Feel free to use the whiteboard.'
```

In this example, we have two functions: `welcomeToLounge()` and `campusClassroom()`. When we call the `welcomeToCampus()` we see that it prints `'Welcome to our student lounge!'`. Meaning that we have accessed something in the school campus or **global scope**.

When we call `campusClassroom`, it prints `'Welcome to class! Feel free to use the whiteboard.'` We have accessed the whiteboard existing only within the classroom. This means we have access something from a **local scope**.

### Question 6

In **JavaScript**, **modules** represent different files with specific functionalities. We can use them in a main program to work in harmony.
In programming, **modules** are important because they allow programmers to organize our code, so we don't have everything in the same file. By doing this, we improve readability and it's easier to identify bugs when the project grows in complexity. We refer to this as **separation of concers** as we have dedicated files with different purposes.

Consider the have the following program:

```js
//name of file: greeting-bye.js
// prints a greeting
const printGreeting = () => {
  console.log("Hello World!");
};
// prints a farewell message
const printBye = () => {
  console.log("Good bye World!");
};

// exports the functions
module.exports = {
  printGreeting,
  printBye,
};
```

We have a file `greeting-bye.js` containing two functions: `printGreeting()` and `prinBye()`. To utilize these functions in another file, we need to **export** them using `module.exports = {...}`. Inside the curly brackets, we add the functions we'd like to use in another file.

To use these functions in another file we do the following:

```js
// file name: main.js
const { printGreeting, printBye } = require("./greeting-bye.js");
const main = () => {
  printGreeting();
  printBye();
};
```

We import the functions from `greeting-bye.js` by writing the `require` key word. By using `const {printGreeting, printBye} = require("./greeting-bye.js')`, we can acess the functions from `greeting-bye.js` directly within `main.js`.

### Question 7

```javascript
const removeLastPurely = (arr) => {
  const arr = [...arr];
  arrCopy.pop();
  return arrCopy;
};

const fruits = ["apple", "banana", "cherry", "date"];
const fruitsMinusOne = removeLastFrom(fruits);
```

After this code runs, `fruits` will hold `['apple', 'banana', 'cherry', 'date']` and `fruitMinusOne` will hold `['apple', 'banana', 'cherry']`.

We make a copy of the array to make it a pure function becuase we don't want to **mutate** the original array.

We wouldn't want to alter the original array because the array could be holding important data. If we don't make a copy, we could **mutate** the original array permanentely.

Taking the previous code as an example. Considering that `fruits` holds four elements, if we call the `removeLastPurely()` function four times, it will remove all elements from the array.

### Question 8

You are a developer on an e-commerce website (like Amazon.com). Your job is to write code that lets users add items to a shopping cart, adjust the quantities of each item, and see a total of all items.

The data type I would use to represent a single item is an object containing the item's itemName, price, quantity, and description. If I use an object, I can represent a single item and its different properties with key-value pairs.

The data type I would use to represent the entire shopping cart holding all the items is an array of objects. I would use an array of objects, because I want to maintain the items' order in the cart. I could delete or add items by accessing their index.

The following code snipper illustrates how this would work:

```js
//filename: shopping-cart.js

const arrofObjects = [];
// takes in an item object
const increaseQuantity = (item) => {
  item.quantity += 1;
};

// takes in an item object
const decreaseQuantity = (item) => {
  // If the item's quantity is greater than 0, decrease the quantity's count
  if (item.quanitity === 0) {
    deleFromCart(item);
  } else {
    item.quantity -= 1;
  }
};

//takes in an item object and add it the end of an array
const addToCart = (item) => {
  increaseQuantity(item);
  arrObjects.push(item);
};

const deleteFromCart = (item) => {
  // deletes the item from the array
  arrObjects.splice(arrOfObjects.indexOf(item), 1);
};

const printShoppingCart = () => {
  console.log(arrOfObjects);
};

module.exports = {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  printShoppingCart,
};
```

```js
// filename: main.js

const {
  increaseQuantity,
  decreaseQuantity,
  addToCart,
  deleteFromCart,
  printShoppingCart,
} = require("./shopping-cart.js");

const main = () => {
  // Available items
  const guitarPick = {
    itemName: "Guitar Pick",
    price: "$2.99",
    quantity: 0,
    description: "Great guitar pick!",
  };

  const casioWatch = {
    itemName: "Casio Watch",
    price: "$25.99",
    quantity: 0,
    description: "Great watch for your wrist.",
  };

  const shoes = {
    itemName: "Shoes",
    price: "$45.99",
    quantity: 0,
    description: "Comfortable shoes for your feet",
  };

  // We add a guitar pick to our cart
  addToCart(guitarPick);
  // We add shoes to our cart
  addToCar(shoes);
  // We want another pick so we increase the value
  increaseQuantity(guitarPick);
  // You know what, one is enough
  decreaseQuantity(guitarPick);

  // We can add a watch to our cart
  addToCart(casioWatch);

  // I have decided I just want to watch, so delete the guitar pick
  deleteFromCart(guitarPick);

  // show our shopping cart
  printShoppingCart();
  /*
    [
        {
            itemName : "Casio Watch",
            price : "$25.99",
            quantity : 1,
            description : "Great watch for your wrist.",
        }
    ]
    */
};

main();
```
