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

userScheme.methods.addToCart = function (service) {
	const cartServiceIndex = this.cart.services.findIndex((cp) => {
		return cp.serviceID.toString() === service._id.toString();
	});

	let newQuantity = 1;
	const updatedCartServices = [...this.cart.services];

	if (cartServiceIndex >= 0) {
		newQuantity = this.cart.services[cartServiceIndex].quantity + 1;
		updatedCartServices[cartServiceIndex].quantity = newQuantity;
	} else {
		updatedCartServices.push({
			serviceID: service._id,
			quantity: newQuantity,
		});
	}

	const updatedCart = {
		services: updatedCartServices,
	};
	this.cart = updatedCart;
	return this.save();
};

userScheme.methods.removeFromCart = function (serviceID) {
	const updatedCartServices = this.cart.services.filter((service) => {
		return service.serviceID.toString() !== serviceID.toString();
	});
	this.cart.services = updatedCartServices;
	return this.save();
};

const user = mongoose.model('Users', userScheme);

export default user;
