import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate"; 
const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do(a) livro é obrigatorio."]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "autores", 
      required: [true, "O autor(a) é obrigatorio."],
      autopopulate: true
    },
    editora: {
      type: String, 
      required: [true, "A editora é obrigatorio."],
      enum: {
        values: ["Casa do código", "Alura"],
        message: "A editora {VALUE} não é um valor válido."
      }
    },
    paginas: {
      type: Number,
      validate: {
        validator: (valor) => {
          return valor >= 10 && valor <= 5000;
        },
        message: "O número de páginas deve estar entre 10 e 5.000."
      },
    },
    preco: {
      type: Number,
    }
  }
);

const livros= mongoose.model("livros", livroSchema.plugin(autopopulate));

export default livros;