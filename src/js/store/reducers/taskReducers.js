
// const taskReducer_STATE =[
// will keep id:0, and  gid: 0
// ]
import axios from 'axios'

export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case "ADDURI":
            return [...state, action.payload]
        case "TELLSTATUS":
            state.map((task) => {
                let data = `{"id":"${task.id}","jsonrpc":"2.0","method": "aria2.tellStatus", "params": ["${task.gid}"]}`;
                let config = {
                    method: 'post',
                    url: 'http://localhost:6800/jsonrpc',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    data: data
                };
                const fetchStatus = async() => await axios(config)
                    .then(function (response) {
                        console.log("TASK ID",task.id)
                        if(response.data.id === task.id){
                            console.log("they are equal", typeof(state))  
                            Object.assign(task, {status: response.data.result.status, path: response.data.result.files[0].path})     
                        }
                })
                    .catch(function (error) {
                        console.log(error);
                    });
                fetchStatus()
            })
            return [...state]
        default:
            return state
    }
}