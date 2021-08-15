export default function reducer(state={},action){
    switch(action.type){
        case "ADD_NUM":{
            const newState = {...state,data:[...state.data,action.payload]}
            return newState
        }
        default:{
            return state
        }
    }
}