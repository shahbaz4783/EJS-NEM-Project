import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
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
});

const job = mongoose.model('Jobs', jobSchema);

export default job;
