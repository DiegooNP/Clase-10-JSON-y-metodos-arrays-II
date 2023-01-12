let horariosPartida = [12, 14, 18, 21]

let horariosAtrasados = horariosPartida.map(function (adelanto) {
    return adelanto -1;
});

console.log(horariosAtrasados);

