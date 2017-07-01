const express = require('express');
const app = express();
const fs = require('file-system');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.listen(3000,function(error){
	if(error == true){
		console.log("some error occurred");
	}else{
		console.log("listening on localhost:3000");
	}
})