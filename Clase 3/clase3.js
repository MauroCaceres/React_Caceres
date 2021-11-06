
let Alumno = prompt("Ingrese la identidad del alumno: Hombre o Mujer (ingrese ESC para ver el resultado final)");
let AlumnoHombre = 0 ;
let AlumnoMujer = 0;

while( Alumno != "ESC"){
    
    if( Alumno == "Hombre" || Alumno == "hombre" || Alumno == "HOMBRE" ){

        AlumnoHombre = AlumnoHombre + 1;
    }
    else if( Alumno == "Mujer" || Alumno == "mujer" || Alumno == "MUJER"){

        AlumnoMujer = AlumnoMujer + 1;
    }
    else{

        console.log("Indefinido");
    }

    Alumno = prompt("Ingrese la identidad del alumno: Hombre o Mujer (ingrese ESC para ver el resultado)");


}


console.log("Cantidad de alumnos hombres: " + AlumnoHombre);
console.log("Cantidad de alumnos mujeres: " + AlumnoMujer);

alert("Cantidad de alumnos hombres: " + AlumnoHombre);
alert("Cantidad de alumnos mujeres: " + AlumnoMujer);