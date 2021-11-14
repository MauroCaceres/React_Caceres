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