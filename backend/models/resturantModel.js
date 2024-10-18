const { model, Schema } = require('../connection');

const restaurantSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // Password should be a string for security reasons (hashed)
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    cuisineType: { type: String, required: true }, // e.g., Italian, Chinese, etc.
    rating: { type: Number, default: 0 },
    isOpen: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('restaurants', restaurantSchema);
