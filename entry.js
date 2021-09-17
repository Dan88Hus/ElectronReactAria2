const Aria2 = require('aria2')
const ws = require('ws')
const nodefetch = require('node-fetch')

const aria2 = new Aria2({ WebSocket: ws, fetch: nodefetch, ...options })
console.log("HERE")

aria2
  .open()
  .then(() => console.log("open"))
  .catch((err) => console.log("error", err));