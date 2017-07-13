var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/runoob')
// user
var user = new mongoose.Schema({
	name: String,
	password: String,
	fullName: String,
	role: String,
	company: String,
	phone: String,
	mail: String
})
// company
var company = new mongoose.Schema({
	name: String,
	createTime: Date
})
//role
var role = new mongoose.Schema({
	name: String,
	fullName: String,
})

var Models = {
	User: mongoose.model('User', user),
	Company: mongoose.model('Company', company),
	Role: mongoose.model('Role', role),
}

module.exports = Models
