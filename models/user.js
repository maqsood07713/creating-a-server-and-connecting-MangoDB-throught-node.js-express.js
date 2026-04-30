const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/schoolDB')
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String
});

module.exports = mongoose.model("users", userSchema);