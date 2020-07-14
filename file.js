var companyratings = {
    "customer service" : 10,
    "computer science" : 9,
}

console.log('server is starting')
var express = require('express');
var item = express();
var port = item.listen(3000);


item.use(express.static('site'));
item.get('/rate/:department/:score', rate)
item.get("/ratings", all);
item.get('/profile/:person/:page?', piece);

function rate(request, response){
    var items = request.params;
    var department = items.department;
    var value = Number(items.score);
    companyratings[department] = value;
    var message = {msg :"Thanks for rating the " + String(department) + " department"};
    response.send(message);
}
function all(request, response){
    response.send(companyratings);
}
function piece(request, response){
    var data = request.params;
    var num = data.page;
    var letter = String(data.person[0]).toUpperCase();
    var name = letter + String(data.person).substr(1, data.person.length);
    str = "Are you looking for page " + String(num) + " of " + String(name) + "'s profile? \n";
    response.send(str);
}
