import mongoose from 'mongoose';
import enviroment from 'dotenv';

const env = enviroment.config();
//const URI = '';

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

export default mongoose;
