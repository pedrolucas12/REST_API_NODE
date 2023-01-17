const { BancoEspecifico } = require("@models");
const { models, QueryTypes } = BancoEspecifico;



module.exports = {
async obter_ordencao(req, res) {
    let query;
    let options;

    query =  ` Select * from Produtos where id = ${req.query.id} `;
    
    options = {
        type: sequelize.QueryTypes.SELECT
    };

   const resultado = BancoEspecifico.query(query, options);     
   
   const [
      presultados
   ] = await Promise.all([resultado]);

   return{
        presultados
   };

}
};
