//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//import * as archiavctv from './activities.json'
const archiavctv = require('./activities.json');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const { Country, Activity } = require('./src/db');
const axios = require('axios')


// Syncing all the models at once.

const actvcomunes = archiavctv;
var campos3={
  name: '',
 season: '',
 difficulty: '',
duration: '',
idpais: ""
}


 console.log("como viene el archivo");
  console.log(actvcomunes);

let rafacreabase = async () => {
 
  let countries = await axios.get(`https://restcountries.com/v3.1/all`)
  await Promise.all(countries.data.map((c) =>{    

      let data = {  
          name: c.name.common,
          id: c.cca3,
          imgflag: c.flags.png,
          capital: c.capital?c.capital[0]:'Nada',          //  capital: [ 'Malé' ]
          continent: c.continents?c.continents[0]:'Nada',  // continents: [ 'South America' ],
          subregion: c.subregion ?c.subregion :  'No ',     // subregion: 'South America',
          area: parseInt(c.area) ? parseInt(c.area) : 0,
          population: parseInt(c.population)  ,          
      }
      // console.log(data)
      Country.create(data);
          
      }))
      .then(rafp());
    }  
       

       async function rafp(){
             await Promise.all(
               actvcomunes.map( (act) =>{
                 Activity.create({name:act.name, difficulty:act.difficulty, duration:act.duration, season:act.season});
                                            
               return console.log("async y await") ;
              
             }))
             .then( async()=>{
               console.log("llamenos las tablas");
               let paises = await  Country.findAll();
               let activstart= await Activity.findAll();
               console.log(paises);
               while (paises.length<200 ) {
                paises = await  Country.findAll();
                 console.log("esperando.....los paises.....");
               }
               console.log(paises[220].id);
               while (activstart.length< 2) {
                activstart= await Activity.findAll();
                console.log("esperando.....las actividades....");
               }
               console.log(activstart[2].id);

               activstart.map((act) =>{
                 console.log("las ID de las  avtividades");
                 console.log(act.id);
                paises.map(async(pss) =>{
                  await pss.addActivity(act.id);
                })
               })
                             
              })
       }
rafacreabase();
     
    ; // llamado de la funcion 


  
    

      console.log('DataBaseCreated')





conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
