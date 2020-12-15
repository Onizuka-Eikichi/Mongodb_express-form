import mongoose from 'mongoose';

const URI =
  'mongodb+srv://onizuka:oniadm@prova2chamada.h7zow.mongodb.net/Clientes?retryWrites=true&w=majority';

mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

export default mongoose;
