import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	tag: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	userID: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	},
});

const service = mongoose.model('Service', serviceSchema);

export default service;
