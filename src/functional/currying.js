// Currying Rewriting two arguments function:
/* function add(a, b) {
    return a+b;
} */
//N=> 1, applaying it by getting rid of b parameter abd returning a fiunction inside it with that parameter
function addCurr(a) {
    return function(b){
        return a+b;
    };
}

console.log(addCurr(6)(5)); // (6, 5)=> (6)(5)
//we have a funtion add with a single parameter. The result of currying is to have a function which
// accepts arguments seperated not with a comma (a,b) just with paranthesis brackets or with two arrows.

// as a arrow function, we have a function that returns a function with a b parameter, and does
const addCurrArrow = a => b => a+b; 
console.log(addCurrArrow(6)(5)); // (6, 5)=> (6)(5)
