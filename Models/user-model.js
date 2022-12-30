const mongoose = require('mongoose')
const UserModel = mongoose.model('user', { name: String });

module.exports=UserModel