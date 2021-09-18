import Aria2 from "aria2";
import ws from "ws";
import nodefetch from "node-fetch";

const options = {
    host: 'localhost',
    port: 6800,
    secure: false,
    secret: 'secret',
    path: '/jsonrpc',
}

const aria2 = new Aria2({ WebSocket: ws, fetch: nodefetch, ...options });



export const addUriAction = (link) => async (dispatch, getState) =>{
    aria2.listMethods().addUri = link
    console.log("LINK",link)
    dispatch({
        type: "ADDURI",
        payload: await aria2.listMethods().addUri
    })

}

// aria2.listMethods().then((lm)=>{
//     console.log("List2 Methods:",lm)
// })