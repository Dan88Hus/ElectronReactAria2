
// const taskReducer_STATE =[
    // will keep id:0, and  gid: 0
// ]


export const taskReducer = (state =[], action) =>{
    switch (action.type){
        case "ADDURI":
            return [...state, action.payload]
        case "TELLSTATUS":
            console.log("STATE,", ...state)     
            return [...state] 
        default:
            return state
    }
}