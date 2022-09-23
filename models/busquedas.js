const axios = require('axios');



class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José'];

    constructor() {
        //TODO: Leer DB si existe
    }

    async ciudad(lugar = '') {
        //peticion http
        //console.log('Ciudad', lugar);
try{
    const resp = await axios.get('https://reqres.in/api/users?page=2');
    
    console.log(resp.data.per_page);
    
    return []; //Retorna los lugares que coincidan con el lugar ingresado en el input

}
catch(error){
    return [];
}
    }

}

module.exports = Busquedas