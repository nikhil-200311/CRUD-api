// S:\API\models\userModel.js
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    age: Number,
    id: String
});

const User = mongoose.model('User', userSchema);

export default User;
