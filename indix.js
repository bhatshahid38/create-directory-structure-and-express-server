const express = require('express');
app = express();
const port = 7010;
app.listen(port,(err => {
    if(err){
        console.log(`error in running the server :${port}`)
    }
    else{
        console.log(`server is running on  :${port}`)
    }
}))