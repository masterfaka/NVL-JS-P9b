//mostrar array y su respect elements
var diassemana="Lunes, Martes, miercole, jueves, viernes, sabado, domingo";
var AdiaSem=diassemana.split(",");
console.log(AdiaSem);
var sitios="Madrid, Sevilla, barcelona, valencia, Zaragoza , bilbao, Donosti";
var aSitios=sitios.split(",");
console.log(aSitios);
var aFinal=[[AdiaSem[0],aSitios[0]],[AdiaSem[1],aSitios[1]],[AdiaSem[2],aSitios[2]],[AdiaSem[3],aSitios[3]],
[AdiaSem[4],aSitios[4]],[AdiaSem[5],aSitios[5]],[AdiaSem[6],aSitios[6]]];
console.log(aFinal);