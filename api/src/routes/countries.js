const router = require('express').Router();
const { Country, Activity} = require('../db');


// GET /countries  
router.get('/', function(req, res){

  Country.findAll({include: Activity}).then((c =>{
                        //console.log(c);
                         res.status(200).json(c)
                         }));
     }
  );

//GET /countries/{idPais}

router.get('/:idPais', function(req, res) {
  //Country.findByPk(req.params.idPais)
  Country.findByPk(req.params.idPais, {include: Activity})
  .then((c) =>{

    if(!c)return res.status(404).send("Pais inexistente");
    //console.log(c);
    res.status(200).json(c);
  })
});

  //_GET /countries?name="mdf" entonces lo que haremos será acceder al
  // parámetro nombre de la query con `req.query.mdf
  router.get('/ter', function(req, res) {
    let {term} = req.query
    console.log(term);

    res.status(200).json("todo muy bien");
  });

  

  
module.exports = router;
