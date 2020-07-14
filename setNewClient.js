let consul = require('./jsonTestConsultor.json');
let client = require('./jsonTestClientsNoConsultor.json');
let weight = require('./jsonStatus2Weight.json')
let setLeads = require('./setLeads.js');

consul = setLeads.setLeadToConsultor(consul, client, weight);

consul.forEach(function(element){
    console.log(element);    
});
