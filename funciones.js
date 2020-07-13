module.exports = {
    setLeadToConsultor: function(consul, client, pesos){
    let consultores = [{}];
        consultores = getPointsConsultor(consul, pesos);
        // ordenar consultores por puntos
        consultores.sort(function(a,b){
            return a.puntos - b.puntos
        });
        // ordenar clientes por peso
        client.sort(function (a,b) {
        return a.status - b.status
        });
        // orden inverso
        client.reverse();
        consul = setLeadToConsultor(consultores, client, consul);
        return consul;
    }
}

setLeadToConsultor =function(consultores, client, consul){
let numConsultores = consultores.length;
let indice = 0;
let countConsultor = 0;
let indiceConsultor = 0;
    client.forEach(function(lead){
        indiceConsultor = consultores[countConsultor%numConsultores].Id
        indice = consul.findIndex(element => element.consultorId === indiceConsultor);
        consul[indice].clientes.push(lead);
        countConsultor++;
    });
    return consul;
}

let getPointsConsultor = function(consul, pesos) {
let status=0, count = 0;
let consultores = [{}];
    consul.forEach(function(co){
    status = 0;
    co.clientes.forEach(function(cl){
        status += weight(cl.status, pesos);
    });
    consultores[count] = {Id:co.consultorId, activo: true, puntos:status};
    count++;
    });
    return consultores;
}

 let weight = function (status, pesos){
    indice = pesos.findIndex(x => x.status === status);
    return pesos[indice].peso
}