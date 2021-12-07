const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const rutrafuno = require('./countries.js');
const rutrafdos = require('./activity.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', rutrafuno);
router.use('/activity', rutrafdos);

//  ¿¿__Ruta principal__??
router.get('/', function(req, res, next){
   
    res.sendStatus(200);
  
  });

  
  

  module.exports = router;

