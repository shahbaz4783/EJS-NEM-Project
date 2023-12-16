import mongoose, { Schema } from 'mongoose';

const orderSchema = new mongoose.Schema({
	services: [
		{
			service: { type: Object, required: true },
			quantity: { type: Number, required: true },
		},
	],
	user: {
		name: { type: String, required: true },
		userID: { type: Schema.Types.ObjectId, required: true, ref: 'Users' },
	},
});

const order = mongoose.model('Orders', orderSchema);

export default order;
