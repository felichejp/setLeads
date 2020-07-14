module.exports = {
    setLeadToConsultor: function(consul, client, weight){
    let consultors = [{}];
        consultors = getPointsConsultor(consul, weight);
        // ordenar consultores por puntos
        consultors.sort(function(a,b){
            return a.puntos - b.puntos
        });
        // ordenar clientes por peso
        client.sort(function (a,b) {
        return a.status - b.status
        });
        // orden inverso
        client.reverse();
        consul = setLeadToConsultor(consultors, client, consul);
        return consul;
    }
}

setLeadToConsultor =function(consultors, client, consul){
let numConsultors = consultors.length;
let index = 0;
let countConsultor = 0;
let indexConsultor = 0;
    client.forEach(function(lead){
        indexConsultor = consultors[countConsultor%numConsultors].Id
        index = consul.findIndex(element => element.consultorId === indexConsultor);
        consul[index].clientes.push(lead);
        countConsultor++;
    });
    return consul;
}

let getPointsConsultor = function(consul, weight) {
let status = 0, count = 0;
let consultors = [{}];
    consul.forEach(function(element){
    status = 0;
    element.clientes.forEach(function(elementC){
        status += setWeight(elementC.status, weight);
    });
    consultors[count] = {Id:element.consultorId, activo: true, puntos:status};
    count++;
    });
    return consultors;
}

let setWeight = function (status, weight){
    let index = weight.findIndex(x => x.status === status);
    return weight[index].peso
}