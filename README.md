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

# Getting Started with Create React App

## ReactJs

A JavaScript library to build web apps
what makes React so special:

- Components
- State

# files in React

## To start React Project with sass styling

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

## Deploy React apps in GH pages

# step 1

Installing gh-pages package

```
$ npm install gh-pages
```

# step 2

Adding homepage into **package.json**

```
"homepage": "http://<your-gh-username>.github.io/<your-repo-name>"

```

# step 3

Adding some more scripts into **package.json**

```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
}
```

# step 4

Lastly run build script to generate build dir

```
$ npm rum build
$ npm run deploy
```

## To install fontawesome icons packages

```
 $ npm i --save @fortawesome/fontawesome-svg-core
 $ npm install --save @fortawesome/free-solid-svg-icons
 $ npm install --save @fortawesome/react-fontawesome
 $ npm install --save @fortawesome/free-brands-svg-icons
 $ npm install --save @fortawesome/free-regular-svg-icons
```

## To install react icons package

```
$ npm install react-icons --save
```

### To use fontawesome icons via Individual Use

Import icons into each component.

```
 $ import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 $ import { faCoffee } from '@fortawesome/free-solid-svg-icons'
 $ const element = <FontAwesomeIcon icon={faCoffee} />
 $ ReactDOM.render(element, document.body)
```

## Installing Router to handle links

```
 $ npm install react-router-dom
```

## Axios to fetch

```
npm i axios
```

## Installing Bootstrap to handle predefined styles

```
 $ npm install react-bootstrap bootstrap@5.0.1
```

## Scss style

```
$ npm install normalize-scss
```

## To play with react emojis

```
npm i emoji-picker-react
```

Usage:

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

## Notes

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

// nonfunctional approach make funtional way
let output = "    Javascript    ";
let output = "<div>" + input.trim() + "</div>;

// things we need to do are writing a two small nd reusable functionss:
// trim
// and wrap into div
// i use const as i wouldn't like to reasign it laters
const trim = str => str.trim();s
//render the string dinamically with backtick by $ sign
const wrapInDiv = str =>  `<div>${}</div>`


```