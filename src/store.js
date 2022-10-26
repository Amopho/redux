// without the defeult export in the reducer, we would have to wrap it 
// into curly brackets
import reducer from "./reducer";
import {createStore} from 'redux';

//createStore is a higher order function, it takes a funtion as a argument
//passing the function reference reducer, not calling it (without ())
const store = createStore(reducer);

export default store;