// import { firebaseApp } from './firebase.js'; 

const express = require('express'); 
const app = express();

// API 만들기

app.get('/', function (req, res) {
    res.json({ // response body
        "hi2": 0,
        "hello": true,
    })
	// res.send('Hello World Express'); 
}); 

app.get('/hi', function (req, res) { // url path
    res.send('Hello World Express 2'); 
}); 

// app.post()

// print(firebaseApp.firebase);

app.listen(8005);




