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
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const { Country } = require('./src/db');
const axios = require('axios')

// Syncing all the models at once.


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
      Country.create(data)
          
      }))
      
    }
  
    rafacreabase();

      console.log('DataBaseCreated')




conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
