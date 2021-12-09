const startstore ={
    countries: [],
    activities: [],
    filtercuntr: []
}

function rootstr(store= startstore, action){
    
    switch (action.type) {
        case "paises":            
        
            return {
                ...store,
                countries: action.payload 
            }

        case "turistica":            
        
            return {
                ...store,
                activities: action.payload 
            }

        case "filtos":            
        
            return {
                ...store,
                countries: action.payload 
            }
            
        case "orden" :
            console.log('reducer para ordenar con payload :' );
            console.log(action.payload);
            let auxraf = store.countries;
            //console.log(auxraf);
            if(action.payload.ordpor==='name' && action.payload.updw===true){
                auxraf.sort(function (a, b) {
                console.log('lado 1');
                console.log(a.name);
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (a.name < b.name) {
                        return 1;
                    }                    
                        return 0;
                      })
                }
                if(action.payload.ordpor==='name' && action.payload.updw===false){
                    auxraf.sort(function (a, b) {
                    console.log('lado 2');
                    console.log(a.name);
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }                    
                        return 0;
                      })
                }

                if(action.payload.ordpor==='population' && action.payload.updw===true){
                    auxraf.sort(function (a, b) {
                    console.log('lado 1');
                    console.log(a.name);
                        if (a.population > b.population) {
                            return 1;
                        }
                        if (a.population < b.population) {
                            return -1;
                        }                    
                            return 0;
                          })
                    }
                    if(action.payload.ordpor==='population' && action.payload.updw===false){
                        auxraf.sort(function (a, b) {
                        console.log('lado 2');
                        console.log(a.population);
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (a.population < b.population) {
                            return 1;
                        }                    
                            return 0;
                          })
                    }
    
        return {
            ...store,
            countries: auxraf
        }    
    
        default:
            return store ;
    }
}

export default  rootstr;