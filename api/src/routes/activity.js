//const router = require('express').Router();
const { Country, Activity} = require('../db');
const { Router } = require('express');

const router = Router();

// GET /activities


router.get('/', function(req, res, next){

  console.log("Estoy en el Get");

  Activity.findAll().then((c =>{
    //console.log(c);
     res.status(200).json(c)
     }));
    //res.status(200).send("Me falta entrar todas las actividades iniciales ");
    console.log("Salgo del Get");
  
  });


router.post('/',async function(req, res){

  const { name, difficulty, duration, season, idpais} = req.body

  console.log( name, difficulty, duration, season);

   const [ativitynew, created]= await Activity.findOrCreate({ 
     where: {name},
     default: {name, difficulty, duration, season}  
    })

   if(idpais.length>2 ){  //length

     const relapais = await  Country.findOne({ where: { id: idpais }  });
     //console.log(relapais);
     //await ativitynew.addCountries(relapais.id); //errado
     if(relapais.id===idpais) await relapais.addActivity(ativitynew.id); //funciona 
   }

   console.log(ativitynew.id);


  res.send("¿ se guardaron los datos  ?") ;
})
  
module.exports = router;
