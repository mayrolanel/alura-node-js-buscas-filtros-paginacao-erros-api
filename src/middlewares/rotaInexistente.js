import PaginaNaoEncontrada from "../erros/PaginaNaoEncontrada.js";

function paginaNaoEncontrada(req, res, next) {
  const naoEncontrada = new PaginaNaoEncontrada();
  next(naoEncontrada);
}

export default paginaNaoEncontrada;