import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  age: Number
});


export const Users = mongoose.model('User', usersSchema);
