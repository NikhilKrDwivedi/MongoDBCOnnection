const  express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db')
//User Model
const User = require('./models/UserData');
const acads = require('./models/acads');
const app = express();

//must include when u are going to perform post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//get 
app.get('/',(req,res)=>{
res.sendFile("./public/index.html", {root: __dirname });

});
//paramtere passing
app.get('/name/:name',(req,res)=>{
	const x= req.params.name;
res.send(x);
});

app.get('/userall',(req,res)=>{
// 	User.count({"email":"authornikhildwivedi@gmail.com"}, function (err, docs) {
//   console.log(docs)});

//   	User.find().distinct('email', function(error, ids) {
//     console.log(ids)
// });
//   	User.remove({"email":"authornikhildwivedi@gmail.com"}, function (err, docs) {
//   console.log(docs)});
  
// 	User.find({}, function (err, docs) {
//   //console.log(docs)
//   	res.send(docs);
// });

	acads.count({lastLevelCode:"Bhargmnw_l11-l24-l31-l415-l51-l63"}, function (err, docs) {
  console.log(docs)
  res.json(docs);
});


});
//post method
app.post('/data',(req,res)=>{
	const{name,email,password}=req.body;
		const newUser= new User({
				name,
				email,
				password
			});
newUser.save().then(user => {
						console.log('success_msg','You are now registered and you can login');
						res.redirect('/');
					}).catch(err=>{console.log(err);res.json(newUser);});

});

const PORT=process.env.PORT||3000;
app.listen(PORT,console.log(`server is running at port ${PORT}`));