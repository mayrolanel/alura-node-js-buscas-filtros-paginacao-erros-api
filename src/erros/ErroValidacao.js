import RequisicaoIncorreta from "./RequisicaoIncorreta.js";

class ErroValidacao extends RequisicaoIncorreta {
  constructor(erro){

    const mensagensErro = Object.values(erro.errors)
      .map(err => err.message)
      .join("; ");
    super(`Houve um erro nos dados enviados pelo cliente: ${mensagensErro}`);
  }


}

export default ErroValidacao;