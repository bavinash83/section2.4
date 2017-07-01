const express = require('express');
const app = express();


app.listen(3000,function(error){
	if(error == true){
		console.log("some error occurred");
	}else{
		console.log("listening on localhost:3000");
	}
})