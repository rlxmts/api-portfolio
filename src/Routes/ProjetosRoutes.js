import express from "express";
import ProjetosController from "../Controller/projetoController.js";
import checkIp from "../Middleware/CheckIp.js";

const routes = express.Router();
routes.get("/projetos", ProjetosController.listarProjetos);
routes.get("/projetos/:id", ProjetosController.buscarProjeto);
routes.put("/projetos/:id", checkIp, ProjetosController.editarProjeto);
routes.post("/projetos", checkIp, ProjetosController.cadastrarProjeto);
routes.delete("/projetos/:id", checkIp, ProjetosController.deletarProjeto);

export default routes;