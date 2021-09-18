
const INITIAL_STATE ={
    id:0, gid: 0
}


export const taskReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "ADDURI":
            return [action.payload]
        default:
            return state
    }
}