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

aria2
    .open()
    .then(() => console.log("CONNECTED TO ARIA2"))
    .catch((err) => console.log("error", err));

aria2.listNotifications().then((list) => {
    console.log(list)
    list.forEach((notification) => {
        console.log("here")
        aria2.on(notification, (params) => {
            console.log('aria2', notification, params)
        })
    })

})

aria2.listMethods().then((lm)=>{
    console.log(lm)
})
console.log(aria2)