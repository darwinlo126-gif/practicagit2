let ciudades=[
    {nombre: "Bogota",numeroHabitantes:20000000,metrosSM:25000,temperatura:"15°",coordenadas:[455,-235],sitios:[{"01":"parque","02":"museo"}]},
    {nombre: "Cali",numeroHabitantes:5000000,metrosSM:5000,temperatura:"30°",coordenadas:[120,-280],sitios:[{"01":"plaza","02":"piscina"}]},
    {nombre: "Pereira",numeroHabitantes:2000000,metrosSM:10000,temperatura:"20°",coordenadas:[220,-180],sitios:[{"01":"zoologico","02":"parque del cafe"}]}
]
let contenidoTabla=document.getElementById('contenidoTabla');

function cargar(arreglo)
{
    contenidoTabla.innerHTML=arreglo.map((objeto)=>
    `<tr>
    <td>${objeto.nombre}</td>
    <td>${objeto.numeroHabitantes}</td>
    <td>${objeto.metrosSM}</td>
    <td>${objeto.temperatura}</td>
    <td>${objeto.coordenadas}</td>
    <td>${Object.values(objeto.sitios[0]).join(' , ')}</td>

    </tr>`
).join('');
}
cargar(ciudades);