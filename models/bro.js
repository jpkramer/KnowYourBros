var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bro = mongoose.model('Bro', new Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    authID: String,
    broPic: String,
    status: [{ type: Schema.Types.ObjectId, ref: 'Status' }],
    created: { type: Date, default: Date.now }
});

var Status = mongoose.model('Status', new Schema({
	broID: { type: Schema.Types.ObjectId, ref: 'Bro' },
	text: String,
	feeling: Number,
	link: String,
	img: String,
    created: { type: Date, default: Date.now }
});

module.exports = {
	Bro: Bro,
	Status: Status
};


/*

Feeling






*/