import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  imagem: {type: String, required: true},
  titulo: {type: String, required:true},
  repositorio: {type: String, required:true},
  deploy: {type: String, required: true},
  tags: {type: Array},
  data: {
    type: Date,
    default: Date.now
  },
  texto: {type: String, required: true}
}, {versionKey: false});

const projetos = mongoose.model("projetos", projetoSchema);
export default projetos;