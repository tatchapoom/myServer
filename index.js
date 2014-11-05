var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/api/book', function(req,res){
	var books = [
		{title: 'CSS', price: 500},
		{title: 'HTML', price: 1300},
		{title: 'JSON', price: 4000}
 
	];
	res.send(books);
})
var server = app.listen(3000, function () {
  console.log('server is running')

})