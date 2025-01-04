import express from 'express';
const app=express();
const port =5001

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.listen(port, function(){
    console.log('http://localhost'+port);
})