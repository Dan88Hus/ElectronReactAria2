import Aria2 from "aria2";
import ws from "ws";
import nodefetch from "node-fetch";
import axios from "axios";

const options = {
    host: 'localhost',
    port: 6800,
    secure: false,
    secret: 'secret',
    path: '/jsonrpc',
}

const aria2 = new Aria2({ WebSocket: ws, fetch: nodefetch, ...options });



export const addUriAction = (link) => async (dispatch, getState) => {
    var data = `{"id": "${Math.floor(Math.random() * 1000000000)}","jsonrpc":"2.0","method": "aria2.addUri", "params": [["${link}"]]}`;
    // console.log("LINK", link, "data", data)

    var config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };

    await axios(config)
        .then(function (response) {
            console.log(response.data.id);
            dispatch({
                type: "ADDURI",
                payload:{
                    id: response.data.id,
                    gid: response.data.result
                }
            })
        })
        .catch(function (error) {
            console.log(error.message);
        });



}

// aria2.listMethods().then((lm)=>{
//     console.log("List2 Methods:",lm)
// })