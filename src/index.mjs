import pipe from "lodash/fp.js";

// a function that takes an input str, whicg will be trimmed, lowercased, and put into the div element

// trim
let input = "    Javascript    ";
// let output = "<div>" + input.trim() + "</div>";
const trim = str => str.trim();
// lowercsase
const toLowerCase = str => str.toLowerCase();
// wrap into div
// applying a currying function, seperating arguments with arrows instead of comma:
const wrap = (type, str) =>  `<${type}>${str}</${type}>`;
// const wrap = type => str =>  `<${type}>${str}</${type}>`;

// ugly code tranformed with pipe Lodash, functional programming:
// const result = wrapInDiv(toLowerCase(trim(input)));

// 3 arguments for compose- an higher order function which takes another functions as arguments 
// and returns a new function
// const transform =()=> compose(wrapInDiv, toLowerCase, trim);

const transform = ()=> pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));


