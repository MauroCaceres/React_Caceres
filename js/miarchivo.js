/*
function Calculadora(){

    let PrecioPaquete = parseFloat(prompt("Ingrese el precio del paquete a calcular"));

    if(PrecioPaquete != "" && PrecioPaquete != null && !isNaN(PrecioPaquete)){

        function CalculoIVA (PrecioPaquete){
            return (PrecioPaquete * 0.21)
        }
    
        let iva = CalculoIVA(PrecioPaquete);
        alert("El adicional por IVA es: " + iva + " U$D")
    
        function PrecioMasIVA(PrecioPaquete){
            return (PrecioPaquete + (PrecioPaquete * 0.21))
        }
    
        let PrecioTotal = PrecioMasIVA(PrecioPaquete)
        alert("El precio total + IVA es de: " + PrecioTotal + " U$D")
    
        function DescuentoTotal(PrecioTotal){
            return (PrecioTotal - (PrecioTotal * 0.1))
        }
    
        let Descuento = DescuentoTotal(PrecioTotal)
        alert("Si te registras con nuestro código de descuento, pagás un 10% menos siendo un total de: " + Descuento+ " U$D!") 

    }
    else{
        alert("Se ingresó valores incorrectos!")
    }
}
*/

/*Productos*/

class paquete{
    constructor( nombre , precio){

        this.nombre = nombre;
        this.precio = precio;

    }

    Calcular(){
        alert("Paquete seleccionado: " + this.nombre)
        alert("Precio original: " + this.precio)
        let iva = this.precio * 0.21;
        let precioTotal = this.precio + iva;
        alert("Precio total + IVA: " + precioTotal)
        let Descuento = precioTotal * 0.1;
        let precioDescuento= precioTotal - Descuento;
        alert("Si te registras con nuestro código de descuento, pagás un 10% menos siendo un total de: " + precioDescuento+ " !") 

    }


}
let oferta1 = new paquete ("Pandemonium", 60);
let oferta2 = new paquete ("Pandemonium + Pre-Order", 55);
let oferta3 = new paquete ("Pandemonium + Early Access", 60);
let oferta4 = new paquete ("Pandemonium + Pre-Order - Early Access", 65);


/*Registrarse 2.0*/

class usuario{
    constructor( nombre , dni , edad){

        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
    }
}

let listaUsuarios = [];

/*Eventos*/

let boton = document.getElementById("Registro")
boton.addEventListener("click", respuestaClick)

function respuestaClick (e){



    let nombre = document.getElementById("validationDefault01").value;
    let edad = document.getElementById("validationDefault02").value;
    let dni = document.getElementById("validationDefault03").value;

    listaUsuarios.push( new usuario( nombre , dni , edad ))
    
    
    /*Ordenamiento por Método Sort*/
    listaUsuarios.sort( (a, b) => {
        if(a.nombre.toLowerCase() > b.nombre.toLowerCase()){
            return 1;
        }
        if(a.nombre.toLowerCase() < b.nombre.toLowerCase()){
            return -1;
        }
        return 0;
    });
    
    console.log(listaUsuarios);
    alert("Bienvenido " + nombre + "!")
    document.getElementById("Bienvenida").innerHTML = nombre;
    e.preventDefault()

}


/*Login*/

function BuscarNombre()
{
    let ingreso = prompt("Ingrese su nombre de usuario");
    const resultado = listaUsuarios.find((m) => m.nombre === ingreso );

    console.log("El usuario es: " + resultado.nombre );
    document.getElementById("User").innerHTML = resultado.nombre;
}


/* DOM - Templates */

const productos =[{  id: 1,  nombre: "Pandemonium"          , imag: 14, boton: "oferta1", selector: "invalidCheck1", texto: "Pandemonium: La reencarnación del Mal - Lanzamiento - 59.99 U$D + IVA" },
                  {  id: 2,  nombre: "Pre-Order"            , imag: 15, boton: "oferta2", selector: "invalidCheck2", texto: "Pandemonium - Pre-Order - 54,99 U$D + IVA" },
                  {  id: 3,  nombre: "Early Access"         , imag: 16, boton: "oferta3", selector: "invalidCheck3", texto: "Pandemonium - Early Access - 59,99 U$D + IVA" },
                  {  id: 4,  nombre: "Pre-Order Early Acces", imag: 17, boton: "oferta4", selector: "invalidCheck4", texto: "Pandemonium - Pre-Order + Early Acces - 64,99 U$D + IVA" }];

for (const producto of productos) {
    let Nodo = document.createElement("article");   

    Nodo.className = "container blog__simple general_border my-4"

    Nodo.innerHTML = `
    <div class="row my-4">
    <div class="col-lg-4">
        <img src="img/${producto.imag}.jpg" class="img-fluid my-4 general_border" alt="Noticia de Actualización 1">
    </div>

    <div class="col-lg-8">
            <h4 class="txtgold my-4">${producto.texto}</h4>
            <button class="btn btn-primary mb-4" onclick="${producto.boton}.Calcular()">Calcular precio</button>
         </div>
    </div>
    `;

    document.getElementById("CardContainer").appendChild(Nodo);
}

/* JSON Storage */

const cosos = [ { id: 1,  producto: "Arroz", precio: 125 },
                    {  id: 2,  producto: "Fideo", precio: 70 },
                    {  id: 3,  producto: "Pan"  , precio: 50},
                    {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("listaProductos", JSON.stringify(cosos));

class Coso {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }

    }
    const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
    const cosas = [];

    for (const objeto of almacenados)
        cosas.push(new Coso(objeto));

console.log(cosas);


let boton1 = document.getElementById("Resenas")
boton1.addEventListener("click", Resena)

function Resena (e){

    let comentario = document.getElementById("exampleFormControlTextarea1").value;

    Comentarios.push(comentario);

    sessionStorage.setItem('ComentariosData', JSON.stringify(Comentarios));


}

/* jQuery */

$('#UpdateContainer').append('<button class="btn btn-primary px-3 mb-3" type="submit" onclick="" id="Desplegar">DESPLEGAR</button>');

const actualizaciones = [   {  id: 1,  titulo: "Versión 0.5.2 Nuevo sistema de seguimento AI", texto: "Se corrigió un error que causaba que la IA de los monstruos consumiera demasiados recursos del servidor. Esto también soluciona muchos casos en los que los monstruos usaban sus habilidades con más frecuencia de lo previsto como The Shaper en el encuentro de Uber Elder que se teletransporta con demasiada frecuencia." },
                            {  id: 2,  titulo: "Patch 4.2 Mejora de Motor Gráfico", texto: "Agregamos un deslizador de Bloom a las opciones gráficas que te permitirá ajustar la intensidad de los efectos del Bloom desde un 25 % a un 130 % de su intensidad base." },
                            {  id: 3,  titulo: "Versión 0.5.1 Arreglos de bugs de interacción"  , texto: "Se corrigió un error introducido en 0.5.0 donde las minas de piroclasto podían disparar más proyectiles de los previstos. Se corrigió un error por el cual Jun podía teletransportarse a lugares inaccesibles. También se corrigió 2 bloques de instancias." },
                            {  id: 4,  titulo: "Patch 4.1 Nuevos modelos de textura agregados" , texto: "Corregimos un error que a veces causaba que se renderizaran cajas negras encima de algunos objetos. Corregimos un error por el que Elusivo causaba que algunos efectos cosméticos perdieran sus texturas brevemente cuando la bonificación expiraba." }];


$("#Desplegar").click(function () {

    for (const actualizacion of actualizaciones) {
    $("#UpdateContainer").append(`
    <article id="Extendido" class="container blog__simple general_border my-4">
        <div>
            <h4 class="txtgold my-4 py-4">${actualizacion.titulo}</h4>
            <p class="txtold text-secondary">${actualizacion.texto}</p>
            <br>
        </div>
    </article>`)
    }
    $("#Desplegar").remove();
});
