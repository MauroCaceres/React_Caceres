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