import Aria2 from "aria2";
import ws from "ws";
import nodefetch from "node-fetch";
import axios from 'axios'

const options = {
    host: 'localhost',
    port: 6800,
    secure: false,
    secret: 'secret',
    path: '/jsonrpc',
}

const aria2 = new Aria2({ WebSocket: ws, fetch: nodefetch, ...options });

aria2.open().then(() => console.log("CONNECTED TO ARIA2"))
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
    console.log("List Methods:",lm)
})

// console.log("Aria2",aria2)


// addUri methods ####################################################################

// var data = '{"id":"100000111","jsonrpc":"2.0","method": "aria2.addUri", "params": [["https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf"]]}';
// https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf
// var config = {
//   method: 'post',
//   url: 'http://localhost:6800/jsonrpc',
//   headers: { 
//     'Content-Type': 'text/plain'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

// dummy "id":"316298713","gid":"79550700e04afeaa"
// addUri ends ###############################################################################
