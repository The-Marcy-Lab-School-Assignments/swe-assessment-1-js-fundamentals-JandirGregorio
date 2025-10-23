# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1

I identified a **ReferenceError**. The `currentStatus` variable is declared inside both the `if` and `else` statements. That makes `currentStatus` a local variable inside the `if-else` estatements. Once the conditional statement is evaluated to `true` or `false`, `currentStatus` does not exist anymore. To fix, we can **declare** `currentStatus` using `let` before going into the `if-else` statement and reassign the variable inside.

```js
const react = (isReuben) => {
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

It looks like they try to assign a copy of `bestPlayer` to `theGOAT`. The problem is that Objects are a **Reference Type**. Instead of assigning a copy of the object to `theGOAT`, they assign a reference to `bestPlayer`. They are pointing to the same reference in **the heap**. Therefore, when they try reassign the `theGOAT`'s name **property**, they are also updating `bestPlayer`.

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
const sum = (...nums) => {
  let totalSum = 0;
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

You can think of scope like a **school campus**. Anyone can acess the campus and the things that exist within it. For example, the student lounge. This is considered global scope as it's easily accessible by any student with acess to campus. Inside a classroom, there are unique things to that room, such as a whiteboard, desks, etc. This is considered local scope, as you can't acess these things if you are in another room.

Let's illustrate this with a simple function:

```js
const studentLounge = 'Welcome to our student lounge!";

const welcomeToLounge = () =>{
    console.log(studentLounge);
};

const campusClassroom = () => {
    const welcomeToClass = "Welcome to class! Feel free to use the whiteboard.";
    console.log(welcomeToClass);
};

welcomeToLounge(); // 'Welcome to our student lounge!'
campusClassroom(); // 'Welcome to class! Feel free to use the whiteboard.'
```

In this example, we have two functions: `welcomeToLounge()` and `campusClassroom()`. When we call the `welcomeToCampus()` we see that it prints `'Welcome to our student lounge!'`. Meaning that we have accessed a school campus and its lounge. When we call `campusClassroom`, we see a welcome message and permission to acess the whiteboard. The whiteboard is only acessible if you are inside the classroom.

### Question 6

In **JavaScript**, **modules** represent different files with specific functionalities. We can use them in a main program to work in harmony.
In programming, **modules** are important because they allow to organize your code, so you don't have everything in the same file. By doing this, we improve readibility and it's easier to identify bugs when the project grows in complexity. We refer to this as **separation of concers**.

Consider the have the following program:

```js
//name of file: greeting-bye.js
const printGreeting = () => {
  console.log("Hello World!");
};

const printBye = () => {
  console.log("Good bye World!");
};

module.exports = {
  printGreeting,
  printBye,
};
```

We have a file `greeting-bye.js` containing two functions. To utilize these functions in another file, we need to **export** them using `module.exports = {...}`. Inside the curly brackets, we add the functions we'd like to use in another file.

To use these functions in another file the do the following:

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

We make a copy of the array to make it a pure function to not modify the original array we got the values from.

We wouldn't want to alter the original array because the array could be holding important data. I we don't make a copy, we might accidentally delete something that wasn't supposed to be deleted.

### Question 8

You are a developer on an e-commerce website (like Amazon.com). Your job is to write code that lets users add items to a shopping cart, adjust the quantities of each item, and see a total of all items.

The data type I would use to represent a single item is an object containing the item's name, price, quantity, and description. If I usea an object, I can represent a single item and its different properties.

The data type I would use to represent the entire shopping cart holding all the items is an array of objects. I would use an array of objects, because I want to maintin the item's order in the card. I could delete or add items by accessing their index.
