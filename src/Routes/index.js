import express from "express";
import projetos from "./ProjetosRoutes.js";

const routes = (app)=> {
  app.route("/").get( (req, res)=> res.status(200).send("Digite >>> /projetos <<< para acessar os projetos."));
  app.use(express.json(), projetos);
};

export default routes;