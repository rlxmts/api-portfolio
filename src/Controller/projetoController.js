import projetos from "../Models/Projetos.js";

class ProjetosController {
  static async listarProjetos(req, res) {
    try{
      const listaDeProjetos = await projetos.find({}).sort({data: -1});
      res.status(200).json({"Posts":listaDeProjetos});
    }catch(erro){
      res.status(500).send(`Erro ao buscar projetos: ${erro}`);
    }
  } 
  
  static async cadastrarProjeto(req, res) {
    try{
      const novoProjeto = await projetos.create(req.body);
      res.status(201).json({message: "Novo projeto cadastrado com sucesso!", Projeto: novoProjeto});
    }catch(erro){
      res.status(500).send(`Não foi possivel adicionar o projeto: ${erro}`);
    }
  }

  static async buscarProjeto(req, res) {
    try{
      const id = req.params.id;
      const projetoBuscado = await projetos.findById(id);
      res.status(200).json({message: "Post encontrado!", projetoBuscado});
    }catch(erro){
      res.status(500).send(`Erro ao buscar projetos: ${erro}`);
    }
  } 
  
  static async deletarProjeto(req, res) {
    try{
      const id = req.params.id;
      await projetos.findByIdAndDelete(id, req.body);
      res.status(200).json({message: "Projeto deletado!"});
    }catch(erro){
      res.status(500).send(`Não foi possivel deletar o projeto: ${erro}`);
    }
  }
 
  static async editarProjeto(req, res) {
    try{
      const id = req.params.id;
      await projetos.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Projeto editado com sucesso!"});
    }catch(erro){
      res.status(500).send(`Não foi possivel editar o projeto: ${erro}`);
    }
  }
}

export default ProjetosController;