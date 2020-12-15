import mongoose from '../API/connection.js';

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const form = mongoose.model('FormSchema', formSchema);
export default form;
