import express from "express";
import ProjetosController from "../Controller/projetoController.js";
const routes = express.Router();
routes.get("/projetos", ProjetosController.listarProjetos);
routes.get("/projetos/:id", ProjetosController.buscarProjeto);
routes.put("/projetos/:id", ProjetosController.editarProjeto);
routes.post("/projetos", ProjetosController.cadastrarProjeto);
routes.delete("/projetos/:id", ProjetosController.deletarProjeto);

export default routes;