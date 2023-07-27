require('dotenv').config()
const http = require('http')
const host = process.env.host
const port = process.env.port
const app = require('./app')

const myServer = http.createServer(app)

myServer.listen(port,()=>{
    console.log(`server started at http://${host}:${port}`)
}) 