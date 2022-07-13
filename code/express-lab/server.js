const express = require('express')
const app = express()
const port = 3000
const marsMissions = require('./data/marsData')
console.log(marsMissions);



app.get()// for the marsData)





app.listen(port, function(){
    console.log('running on port ${port}');
})