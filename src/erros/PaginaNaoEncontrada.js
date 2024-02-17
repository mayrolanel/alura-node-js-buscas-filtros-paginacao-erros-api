import ErroBase from "./ErroBase.js";

class PaginaNaoEncontrada extends ErroBase {
    constructor(mensagem = "Página não encontrada!", status = 404){
        super(mensagem, status)
    }
}

export default PaginaNaoEncontrada;