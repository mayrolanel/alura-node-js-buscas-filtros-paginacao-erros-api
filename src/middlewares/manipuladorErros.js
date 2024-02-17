import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import PaginaNaoEncontrada from "../erros/PaginaNaoEncontrada.js";

function manipuladorDeErros(erro, req, res, next) {
    console.error(erro)
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res);
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
    } else if(erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao(erro).enviarResposta(res)
    } else if(erro instanceof PaginaNaoEncontrada) {
        erro.enviarResposta(res);
    }
    else {
        new ErroBase().enviarResposta(res)
    }
}

export default manipuladorDeErros;