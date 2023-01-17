const { BancoEspecifico } = require("@models");
const moment = require("moment");

module.exports = {

async obter_ordencao(req, res) {
    const { query } = req;
    Produtos.ordem(query.id)
      .then((resultado) => res.json(resultado))
      .catch((error) => {
        const {
          code = 500,
          title = "Internal Server Error",
          description = error.message,
        } = error;
        return res.status(code).json({ title, description });
      });
  }

};