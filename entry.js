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
console.log("HERE")

aria2
  .open()
  .then(() => console.log("CONNECTED TO ARIA2"))
  .catch((err) => console.log("error", err));

console.log(aria2)