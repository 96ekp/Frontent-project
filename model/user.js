const addressSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phone: String,
  address: String,
  city: String,
  postcode: String,
  lat: Number,
  lon: Number,
});

// user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  addresses: [addressSchema],
});

exports.User = mongoose.model("user", userSchema);
exports.Address = mongoose.model("address", addressSchema);
