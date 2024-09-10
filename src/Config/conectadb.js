import mongoose from "mongoose";
// eslint-disable-next-line no-undef
const chaveApi = process.env.DB_CONNECTION;
async function canectaApi(){
  mongoose.connect(chaveApi);
  return mongoose.connection;
}
export default canectaApi;