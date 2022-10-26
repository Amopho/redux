// []
let lastId = 0;
// instead of using the spread operaton one may use 
//the immutability libraries like immer or immutable.js
// in case our state would be empty, the reducer would pass an undefined.
// To avoid this, one should return an initialized state state = []
export default function reducer(state=[],action) {
if (action.type === 'bugAdded')
    return [
    ...state,
    {
        id: ++lastId,
        description: action.payload.description,
        resolved: false
    }    
    ];
    // return all the bugs beside that one which was removed
    else if (action.type=== 'bugRemoved')
    return state.filter(bug=>bug.id !== action.payload.id)

    // in case of dispatching the not existing action
    return state;

}

