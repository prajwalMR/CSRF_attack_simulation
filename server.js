var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var cors = require('cors');
var port = 5000;

app.use(express.static('.'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

var BALANCE = 200000;


app.get('/account/transfer' , function(req , res){
	accName = req.query.payTo;
	amount = req.query.amount;

	console.log("\n\n" + amount + " rupees has been transfered to the account holder : " + accName + "\n\n");

	BALANCE -= amount;

	res.send({
		'status' : "Success",
		'msg' : 'Money transfered Successfully',
		'balance' : BALANCE
	});
}),

app.get('/account/balance' , function(req , res){
	//accNum = req.query.accNum;
	accName = req.query.accName;

	res.send({
		'status' : 'Success',
		'balance' : BALANCE
	});
})

app.listen(port , function(){
	console.log("bank.com server running on port " + port);
})




