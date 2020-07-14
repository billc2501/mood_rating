console.log('server is starting')

var express = require('express');

var item = express();

var port = item.listen(3000);

item.use(express.static('site'));


item.get('/search/:item1/:num', piece);
function piece(request, response){
    var data = request.params;
    var num = data.num;
    str = ""
    for (let i = 0; i < num; i ++)
    {
        str += "Are you searching for "+ String(data.item1) + "\n";
    }
    response.send(str);
}