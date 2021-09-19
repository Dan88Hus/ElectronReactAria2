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
    let data = `{"id": "${Math.floor(Math.random() * 1000000000)}","jsonrpc":"2.0","method": "aria2.addUri", "params": [["${link}"]]}`;
    let config = {
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
                payload: {
                    id: response.data.id,
                    gid: response.data.result
                }
            })
        })
        .catch(function (error) {
            console.log(error.message);
        });
}

export const tellStatus = () => async (dispatch, getState) => {
    console.log("tellStatus started")
    dispatch({
        type: "TELLSTATUS",
    })
}


export const pauseAction = (id, gid) => async (dispatch, getState) => {

    console.log("pauseAction Called", id, 'GID', gid)

    let data = `{"id":"${id}","jsonrpc":"2.0","method": "aria2.pause", "params": ["${gid}"]}`;
    let config = {
        method: 'post',
        url: 'http://127.0.0.1:6800/jsonrpc',
        headers: {
            'Content-Type': 'text/plain'
        },
        data: data
    };
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            dispatch({
                type: "PAUSE",
            })
        })
        .catch(function (error) {
            console.log(error);
        });

}