
const INITIAL_STATE =[
    "empty"
]

export const taskReducer = (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "ADDURI":
            return [action.payload]
        default:
            return state
    }
}