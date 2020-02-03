const express = require('express')
const app =  express();


app.get('/', (req,res) => res.send('Hello from my simple node app server!'))

const port = 4000;
app.listen(port, () =>{
    console.log(`Sample node server is running on port ${port}`)
})