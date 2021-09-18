const express = require('express')

const app = express();

const routerOne = require('./routers/routerOne')
app.use('/chart',routerOne)

app.listen(8080,()=>{
console.log('server started')
})