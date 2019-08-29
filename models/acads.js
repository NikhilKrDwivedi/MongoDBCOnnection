  const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
studentId:{
	type:String,
	required:true
},
lastLevelCode:{
	type:String,
	required:true
},
});

const attendance=mongoose.model('attendance',UserSchema);
module.exports = attendance;