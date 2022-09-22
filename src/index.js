import {compose, pipe} from "lodash/fp";

let input = "    Javascript    ";
// let output = "<div>" + input.trim() + "</div>";

// trim
//  wrap into div
// lowercsase
const trim = str => str.trim();
// applying a currying function, seperating arguments with arrows instead of comma
// const wrap = (str, type) =>  `<${type}>${str}</${type}>`;
const wrap = type=> str =>  `<${type}>${str}</${type}>`;

const toLowerCase = str => str.toLowerCase();
// ugly code tranformed with pipe 
// const result = wrapInDiv(toLowerCase(trim(input)));

// Lodash to simplify the functional programming, let's get rid of all those unnecessary paranthesis
// 3 arguments for compose- an higher order function which takes another functions as arguments and returns a new function
// const transform = compose(wrapInDiv, toLowerCase, trim);
// again we need to read the functions order from rigth to left, to solve this problem use pipe 
// and pass funtions in a order we are applying
// pipe builds a pipeline the output of each function ends up of being an output of the next one, in this case the second pipeline
// output is a lowercase string, the second parameter is empty, and that's why the console log says undefined, by giving the div as 
//a type element to the wrap we get another error "expected a function", it produces a streing, but every argument given to the pipe has to be function
// we need a funtion with a single parameter instead of two parametres - currying solves this problem. 
//After applying currying to wrap("div we get a funtion instead of a string"). Now we can pass this function into a pipe.
const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));


