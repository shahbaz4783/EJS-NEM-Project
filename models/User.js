import mongoose from 'mongoose';

const userScheme = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	cart: {
		services: [
			{
				serviceID: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Service',
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
			},
		],
	},
});

const user = mongoose.model('Users', userScheme);

export default user;
