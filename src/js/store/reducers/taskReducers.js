
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
                        if(response.data.id === task.id){
                            let progressPercent = ((response.data.result.completedLength / response.data.result.totalLength)*100).toFixed(2)
                            console.log("they are equal", typeof(state), "PP:", progressPercent)  
                            Object.assign(task, {status: response.data.result.status, progress: progressPercent, path: response.data.result.files[0].path})   
                            localStorage.getItem('ERA') ? localStorage.removeItem('ERA') : localStorage.setItem('ERA',JSON.stringify({status: response.data.result.status, progress: progressPercent, path: response.data.result.files[0].path}))
                        }
                })
                    .catch(function (error) {
                        console.log(error);
                    });
                fetchStatus()
            })
            return [...state]
        case "PAUSE":
            return [...state]
        default:
            return state
    }
}