let vueltas = [5, 8, 12, 3, 22]

//reduce() sirve para contar la cantidad de vueltas en el array
let totalVueltas = vueltas.reduce(function(total, numero){
    return total + numero;

});

console.log(totalVueltas);