# redux :camera:

Small app to practice redux state management with Mosh https://codewithmosh.com/courses .

![Preview] (./public/images/redux.png)

### Console work

#### clone repository

git clone https://github.com/amopho/redux.git

#### npm install

#### npm start

# Getting Started with Create React App

## ReactJs

A JavaScript library to build web apps
what makes React so special:

- Components
- State

# files in React

## manifest.json

The web app manifest provides information about an application (such as name, author, icon, and description) in a JSON text file

## reportwebvitals

Tool for measuring the real life performance of your app(very new to React)
more on that [web-vitals](https://www.npmjs.com/package/web-vitals)

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
