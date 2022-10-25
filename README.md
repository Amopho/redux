# redux :camera:

Small app to practice redux state management with Mosh https://codewithmosh.com/courses .

![Preview](./public/images/redux.png)

### Console work

#### clone repository

git clone https://github.com/amopho/redux.git

#### npm i
To install packages from package json

#### npm start

### Getting started with webpack
a js bundle that would throw js code into app json in dist directory.

Configure webpack.config.json
```js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development"
};
```
Package JSON prerequisetes:

```json
{
  "name": "redux-starter",
  "version": "1.0.0",
  "description": "Redux Starter Project",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --config ./webpack.config.js"
  },
  "keywords": [],
  "author": "Mosh Hamedani",
  "license": "ISC",
  "devDependencies": {
    "webpack": "4.41.6",
    "webpack-cli": "3.3.11",
    "webpack-dev-server": "3.10.3"
  }
}
```

### Getting started with webpack
Structure of working directory
dist-> index.html
src-> index.js
root-> package.json, webpack.config.js

### Getting Started with Create React App

#### ReactJs

A JavaScript library to build web apps
what makes React so special:

- Components
- State

#### files in React

#### To start React Project with sass styling

Install and clear the created directory from any files and code one doesn't need.
For example:
- in index
- in app
- in public
- in src

```
 $ npx create-react-app <app-name>
 $ cd <app-name>
 $ npm i node-sass
 $ npm start
```
Default structure for saas:

- main.
- css.

### Deploy React apps in GH pages

#### step 1

Installing gh-pages package

```
$ npm install gh-pages
```

#### step 2

Adding homepage into **package.json**

```
"homepage": "http://<your-gh-username>.github.io/<your-repo-name>"

```

#### step 3

Adding some more scripts into **package.json**

```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
}
```

#### step 4

Lastly run build script to generate build dir

```
$ npm rum build
$ npm run deploy
```

### To install fontawesome icons packages

```
 $ npm i --save @fortawesome/fontawesome-svg-core
 $ npm install --save @fortawesome/free-solid-svg-icons
 $ npm install --save @fortawesome/react-fontawesome
 $ npm install --save @fortawesome/free-brands-svg-icons
 $ npm install --save @fortawesome/free-regular-svg-icons
```

#### To install react icons package

```
$ npm install react-icons --save
```

#### To use fontawesome icons via Individual Use

Import icons into each component.

```
 $ import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 $ import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 $ const element = <FontAwesomeIcon icon={faCoffee} />
 $ ReactDOM.render(element, document.body)
```

### Installing Router to handle links

```
 $ npm install react-router-dom
```

### Axios to fetch

```
npm i axios
```

### Installing Bootstrap to handle predefined styles

```
 $ npm install react-bootstrap bootstrap@5.0.1
```

### Scss style

```
$ npm install normalize-scss
```

### To play with react emojis

```
npm i emoji-picker-react
```

#### Usage:

```js
import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const App = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };

  return (
    <div>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};
```

## Redux Project

### Functional programming
is cutting a bigger problem into a bunch of smaller and reusable funtions which take an input and troe a result. The code written by this way is 
- more concise,
- easy to debug and tests,
- scalabale.
Javascript is not a pure functional programming language. It is a multi paradigm language.

If we don't want to call a function just pass a reference to it. Funtions are first type citizens, we can treat them like normal variables. By calling a funtion we sayHello() we will get an result- string. But we cna pass a function as an argument to another function.

```javascript
function sayHello() {
  return "Hello World!";
}

let fn sayHello;
fn();
sayHello();
// not calling the function just passing it as a references
//function greet(fnMessage) {
//console.log(fnMessage());
//greet(sayHello)
//}
//returning a function instead of a string. Higher order funtion will take another function as a argument or returns it, or both.

function sayHello() {
  return function() {
    return "Hello World";
  }
}
// examples of higher order funtions are well known, like map()
let numbers = [1,2,3];
numbers.map(number => number *2);
// setTimeout as another example because it takes a function as an argment as well

// nonfunctional approach makd funtional way
let output = "    Javascript    ";
let output = "<div>" + input.trim() + "</div>;

// things we need to do are writing a two small nd reusable functionss:
// trim
// and wrap into div
// i use const as i wouldn't like to reasign it laters
const trim = str => str.trim();
//render the string dinamically with backtick with $ sign as a template
const wrapInDiv = str =>  `<div>${str}</div>`;
// we may add another function to lowercase the result
const toLowerCase = str => str.toLowerCase();
// now we use Function Composition in functional programming, but it will result in a plenty of paranthesis we need to close
const result = wrapInDiv(toLowerCase(trim(input)));
// Lodash - JS library to simplify the code which has a lot of funtions for functional programming
import {compose, pipe} from "lodash/fp";

```

#### Lodash

Lodash - JS library to simplify the code which has a lot of funtions for functional programming

```
npm i lodash
```

Into index.js write
FP stays for Functional Programming

Lodash to simplify the functional programming, let's get rid of all those unnecessary paranthesis
3 arguments for compose- an higher order function which takes another functions as arguments and returns a new function
 ```javascript
const transform = compose(wrapInDiv, toLowerCase, trim);
```
But still, it is not that preety piece of code as we need to read the functions order from rigth to left, to solve this problem we will use pipe and pass funtions in the order we are applying. pipe builds a pipeline the output of each function ends up of being an output of the next one.
In our example case the second pipeline output is a lowercase string, the second parameter is empty, and that's why the console log says undefined, by giving the div as a type element to the wrap we get another error: "expected a function", it produces a string, but every argument given to the pipe has to be function. We need a funtion with a single parameter instead of two parametres - currying solves this problem. 
After applying currying to wrap("div we get a funtion instead of a string"). Now we can pass this function into a pipe.

```javascript
import {compose, pipe} from "lodash/fp"
```

### 2.7. Currying
Currying function named after Huskel Curry
we remove unnecessary duplications like in the example where the function does almost the same, except it uses different element. Let's parametrise it.

```javascript
/* const wrapInDiv = str =>  `<div>${str}</div>`;
const wrapInSpan = str =>  `<span>${str}</span>`; */
// we rewrite a function with two parametres with help of Currying technique:
const wrap = (type, str) =>  `<${type}>${str}</${type}>`;
```

That function when used in a Pipeline would produce a string, and should give a function. This is because one of the functions in the pipeline has two parametres instead of one. We can obtain one parameter function from that one with two parametres by currying:
Currying is a function that allow us to grab 'N' argumets and create a function with a single argument.

```javascript
function add(a) {
  return function(b) {
    return a+b
  }
}
```
Currying the two arguments function
```javascript
// const wrap = (type, str) =>  `<${type}>${str}</${type}>`;
const wrap = type => str =>  `<${type}>${str}</${type}>`;
```
### 2.8 Pure function

Renders the same results with given arguments, every single time the component re-renders.
It can't contain:
- random values,
- date/ time
- no global state (dom, db..)

<strong>Error: lodash/fp - in order to solve the import problems the index.js should be renamed as index.mjs or package.json should have "type": module added </strong>

### 3.1. Redux, the store

In redux we store the application in a single js object called the store. It
has to be accesible for every single element in the UI

For the e-commerce shop, our store objrct will have properties like:

```js
{
  products: [],
  categories: [],
  cart: {},
  user: {}
}
```
Remeber one is not able to mutate the state as the redux is built on top of functional programming rules. So in order to update the state in the store we should build a function that takes the store (immutable object) as an argument and updates it by returning updated store. Or to use the immutability libraries like immer or immutable.js

```js
//not possible
store.currentUser = {name: "Name"}
// just:
function reducer(store)
{
const updated = {...store}
}
```
How does the reducer (event handler) knows which instancweof the store to update? For that one we need an action (event)- js object that describes what just happened. iT is the second parameter of the reducer fucntion.

App may have one or more reducers, each responsible for updating a specific slice of store.

These reducers are pure functions, not changing the data.

Take an action and dispatch it, and let the store to know about the action. Store has this dispatch method, and forwrds the action to the reducer. We are not calling the reducer, we work with the store who is responsible for calling the reducer. It computes the new state and returns it. The store injects the state, and notifies the UI components. They will pull the updated data and rerender. Dispatch is like a single entry point for every action

### 3.2. APP Bug Tracker using Redux

Steps for Redux Architecture
1. Designing a store
2. Define Actions
3. Create a Reducer
4. Store

Install the Redux:
```
npm i redux@4.0
```

For a bug tracker application we would need to <strong>Maintain The List of Buggs</strong> the state:

Array of bug objects:

```js
[
  {
    id: 1,
    description: "",
    resolved: false
  },
  {},
  {},
  {}
]
```

In the real life however it would rather be looking like object with multiple properties containing arrays (list) of bugs, user...

```js
{
 bugs: [
  {
    id: 1,
    description: "",
    resolved: false
  },
  {},
  {},
  {}
  ],
currentUser: {}
}
```
### 3.5. Actions
Remember Action is a simple JS Object that expalins eawhat just happened
Mark a Bug as Resolved, Add a Bug, Delete a bug

Redux would search for the type property in your action  object. So it is an obligatory property in your action object.

```js
// coommon convention for a descriptive type in Redux is a capitalizing, with underscore
// description is a data linked with this type - like user describing the bug
{
 type: "ADD_BUG",
 description: ""
}
// it is a good practice to add a payload to describe all the data of the action - a solution from facebooks flux architecture
{
 type: "bugAdded",
 payload: {
  description: ""
  }
}
// minimum information on the data - all we need to identify a bufg is its ID
{
 type: "bugRemoved",
 payload: {
  id: 1
  }
}
```

It has to be a serializable (str, numbers but they are less descriptive), which means we need the state to be able to be stored on the disc. Than we may reload it later.

### 3.6. Designing a reducer

In a src folder add another file reducer.js

In a reducer we are cerating logic that fits to our app

The job of reducer is to return the new state with this action. We have an initial empty array of bugs, to which we will be adding. First copy all the bugs from the current state and add a new object with a bug, It would be nice to have a counter as well, set to 0 at the beginnig. Important thing is we need to make sure that payloag carries a minimum of descriptive information about the new object.
