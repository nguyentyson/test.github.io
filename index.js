var express = require('express');
var data = require('./database/name.json');
var app = express();
var port = 3000;



app.set('view engine','pug'); //set pug la dg dan xem mac dinh
app.set('views','./views'); //duong dan den thu muc views

app.get('/',(req,res)=>{
    res.render('index',{
        name : 'NTS'
    }); //chay index.pug
});

app.get('/user',(req,res)=>{
    res.render('users/index',{data:data}); //chay view.pug show data
});


app.get('/user/search',(req,res)=>{

    var name_search = req.query.name;
    var result  = users.filter((user)=>{
        return user.name.toLowerCase().indexOf(name_search.toLowerCase()) !== -1
    });

    res.render('users/index', {
		users: result // render lại trang users/index với biến users 
	});
});


app.listen(port,()=>{
    console.log('server running port'+ port);
});

