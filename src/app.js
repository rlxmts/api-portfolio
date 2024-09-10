import express from "express";
import conectaApi from "./Config/conectadb.js";

const conexao = await conectaApi();

conexao.on("error", ()=> {
  console.log("Erro ao conectar ao banco!");
});

conexao.once( "open" , ()=> {
  console.log("Conectado ao banco de dados!");
});

const app = express();
export default app;