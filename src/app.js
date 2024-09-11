import express from "express";
import cors from "cors";
import conectaApi from "./Config/conectadb.js";
import routes from "./Routes/index.js";
const conexao = await conectaApi();
conexao.on("error", ()=> {
  console.log("Erro ao conectar ao banco!");
});
conexao.once( "open" , ()=> {
  console.log("Conectado ao banco de dados!");
});

const app = express();
app.use(cors());
app.use(express.json());
routes(app);
export default app;