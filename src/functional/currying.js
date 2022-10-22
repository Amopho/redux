// currying is a function that allow us to get an N argumets and create a function with a single argument
/* function add(a, b) {
    return a+b;
} */
//N=> 1, applaying it by getting rid of b parameter abd returning a fiunction inside it with that parameter
function add(a) {
    return function(b){
        return a+b;
    };
}

//we have a funtion add with a single parameter. the clue is to seprate arguments not with a comma (a,b) but with paranthesis brackets or with two arrows
// as a arrow function, we have a function that returns a function with a b parameter, and does
const addTwo = a => b => a+b;
add(1)(5);
