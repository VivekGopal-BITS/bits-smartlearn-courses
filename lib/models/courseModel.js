'use strict';

var mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	name: {
		type: String,
		required: 'kindly enter the name of the course'
	},
	description: {
		type: String,
		required: 'kindly enter course description'
	},
	instructor: {
		type: String,
		required: 'kindly enter the instructor name'
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
	updatedDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('bits-courses', courseSchema);