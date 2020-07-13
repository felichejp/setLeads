let consul = require('./jsonTestConsultor.json');
let client = require('./jsonTestClientsNoConsultor.json');
let pesos = require('./jsonStatus2Weight.json')
let funciones = require('./funciones.js');

let consultores = [{}];
consul = funciones.setLeadToConsultor(consul, client, pesos);

consul.forEach(function(element){
    console.log(element);    
});
