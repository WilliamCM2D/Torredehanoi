const altura = "40px";//altura de los discos
const ancho = "100%"
var cuerpo;
var cuadro1 = new creacion(true);
var cuadro2 = new creacion(false);
var cuadro3 = new creacion(false);
var selecficha;
var inicio;
var final;
//contiene los diferentes eventos
function carga(){
    cuerpo = document.getElementsByClassName("contenedor")[0];
    cuerpo.appendChild(cuadro1.caja);
    cuerpo.appendChild(cuadro2.caja);
    cuerpo.appendChild(cuadro3.caja);
    cuadro1.caja.addEventListener("click", tocar1, false);
    cuadro2.caja.addEventListener("click", tocar2, false);
    cuadro3.caja.addEventListener("click", tocar3, false);
    cuadro1.caja.addEventListener("mouseover", encima1, false);
    cuadro2.caja.addEventListener("mouseover", encima2, false);
    cuadro3.caja.addEventListener("mouseover", encima3, false);
    cuadro1.caja.addEventListener("mouseout", fuera1, false);
    cuadro2.caja.addEventListener("mouseout", fuera2, false);
    cuadro3.caja.addEventListener("mouseout", fuera3, false);
    
}
//crea los div del programa
function Newdiv() {
    var caja= document.createElement("div");//bajo el atributo caja crea un div para la creacion de fichas
    return caja;
};
//crea relleno para los cuadros
function rellenar(){ 
    this.caja = Newdiv();
    this.caja.style.width = "ancho";
    this.caja.style.height = altura;
};
//llena en vacio los cuadros en blanco 
function rellenonull () {
    var contenido = new Array();//pasa los elementos de relleno a un array
    for (var i = 0; i<9; i++){
        contenido[i] = new rellenar
    };
    return contenido;
};
//array con las fichas principales
function rellenarFichas(){ 
    var contenido = new Array();
    contenido[0] = new rellenar();
    contenido[1] = new Ficha1();
    contenido[2] = new Ficha2();
    contenido[3] = new Ficha3();
    contenido[4] = new Ficha4();
    contenido[5] = new Ficha5();
    contenido[6] = new Ficha6();
    contenido[7] = new Ficha7();
    contenido[8] = new Ficha8();
    return contenido;
};
//da formato a los div que se crean
function creacion(cajainicial) {
    this.caja = Newdiv();
    this.caja.style.width = "33.3%";
    this.caja.style.height = "360px";
    this.caja.style.marginLeft = "0";
    this.caja.style.borderWidth = "0";
    this.caja.style.float = "left";
    this.elegido = false;
    this.contenido;
    if(cajainicial){
        this.contenido = rellenarFichas();
    } else { 
        this.contenido = rellenonull();
    };
    for (var i = 0; i < this.contenido.length; i++) {
        this.caja.appendChild(this.contenido[i].caja);    
    };
    //metodo para saber si existe piezas 
    this.haypiezas = function(){
        var rellenos = 0;
        for (var i = 0; i < this.contenido.length; i++ ){
            if (this.contenido[i] instanceof rellenar){
                rellenos++
            };
        };
        if (rellenos == this.contenido.length){
            return false;
        }else{
            return true;
        };
    };
    //metodo para obtener la ficha de arriba
    this.fichaarriba = function(){
        for (var i = 0; i< this.contenido.length; i++){
            if (!(this.contenido[i] instanceof rellenar)){
                return this.contenido[i];
            };
        };
    };
    //metodo que quita la ficha de arriba
    this.eliminarfichaarriba = function(){
        for (var i = 0; i<this.contenido.length; i++){
            if(!(this.contenido[i] instanceof rellenar)){
                selecficha = this.contenido[i];
                this.contenido[i] = new rellenar();
                break;
            };
        };
    };
    //metodo para agregar la ficha de arriba
    this.agregarfichaarriba = function(){
        for (var i = this.contenido.length - 1; i >= 0; i--){
            if(this.contenido[i] instanceof rellenar){
                this.contenido[i] = selecficha;
                break;
            };
        };
    };
    //dibuja la ficha
    this.dibuja = function(){
        while (this.caja.hasChildNodes()){
            this.caja.removeChild(this.caja.lastChild);
        };
        for (var i = 0; i < this.contenido.length; i++){
            this.caja.appendChild(this.contenido[i].caja);
        };
    };
};
/*************************************Formato de cada ficha*************************************/
function Ficha1() {
    this.caja = Newdiv();
    this.caja.style.width = "25%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#FF6B6B";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%"; 
    this.caja.style.border = " solid black";
    this.valor = 0;    
};
function Ficha2() {
    this.caja = Newdiv();
    this.caja.style.width = "35%"
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#FFD93D";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 1;
};
function Ficha3() {
    this.caja = Newdiv();
    this.caja.style.width = "45%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#6BCB77";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 2;
};
function Ficha4() {
    this.caja = Newdiv();
    this.caja.style.width = "55%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#4D96FF";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 3;
};
function Ficha5() {
    this.caja = Newdiv();
    this.caja.style.width = "65%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#FF5F00";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 4;
};
function Ficha6() {
    this.caja = Newdiv();
    this.caja.style.width = "75%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#B20600";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 5;
};
function Ficha7() {
    this.caja = Newdiv();
    this.caja.style.width = "85%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#00092C";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 6;
};
function Ficha8() {
    this.caja = Newdiv();
    this.caja.style.width = "95%";
    this.caja.style.height = altura;
    this.caja.style.backgroundColor = "#EEEEEE";
    this.caja.style.marginLeft = "auto";
    this.caja.style.marginRight = "auto";
    this.caja.style.borderRadius = "15%";
    this.caja.style.border = " solid black";
    this.valor = 7;
};
//funcion que permite pasar de un lugar a otro
function movimiento(creacion){
    //compara el si hay piezas en el lugar donde selecciona
    if(inicio == undefined){
        if(creacion.haypiezas()){
            inicio = creacion;
            inicio.elegido = true;
        };
    }else if(inicio != undefined && final == undefined){
        final = creacion
        creacion.elegido = true;
        if (inicio != final){
            //hace el movimiento eliminando la pieza del inicio y dibujandola en el lugar final
            if (!final.haypiezas() || (inicio.fichaarriba().valor < final.fichaarriba().valor)) {
                inicio.eliminarfichaarriba();
                inicio.dibuja();
                final.agregarfichaarriba();
                final.dibuja();
            };
        };
    };
    //reinicia cuando no se selecciona uno diferente
    if (final != undefined && inicio != undefined){
        reiniciar();
    };
    //muestra mensaje de haber ganado
    if (victoria()){
        cartelvictoria();
    };
}
//funcion para saber si ganastes
function victoria() {
    //si todas las fichas estan en cuadro 2 o 3 gana
    if (cuadro2.contenido[0] instanceof rellenar &&  
        cuadro2.contenido[1] instanceof Ficha1 &&
        cuadro2.contenido[2] instanceof Ficha2 &&
        cuadro2.contenido[3] instanceof Ficha3 &&
        cuadro2.contenido[4] instanceof Ficha4 &&
        cuadro2.contenido[5] instanceof Ficha5 &&
        cuadro2.contenido[6] instanceof Ficha6 &&
        cuadro2.contenido[7] instanceof Ficha7 &&
        cuadro2.contenido[8] instanceof Ficha8) {
        return true;    
        }else if (cuadro3.contenido[0] instanceof rellenar &&  
                  cuadro3.contenido[1] instanceof Ficha1 &&
                  cuadro3.contenido[2] instanceof Ficha2 &&
                  cuadro3.contenido[3] instanceof Ficha3 &&
                  cuadro3.contenido[4] instanceof Ficha4 &&
                  cuadro3.contenido[5] instanceof Ficha5 &&
                  cuadro3.contenido[6] instanceof Ficha6 &&
                  cuadro3.contenido[7] instanceof Ficha7 &&
                  cuadro3.contenido[8] instanceof Ficha8){
        return true;
        }else{
            return false;
    }
}
//muestra cartel de victoria
function cartelvictoria(){
    alert("Felicidades has ganado pulsar f5 para volver a jugar");
    //document.getElementById('footer').innerHTML='ganador';
}
//reinicia donde estan los elementos
function reiniciar(){
    //si inicio no es diferente a elegido retorna falso lo que permite deseleccionar
    if (inicio != undefined){
        inicio.elegido = false;  
    };
    if (final != undefined){
        final.elegido = false; 
    };
    inicio = undefined;
    final = undefined;
    cuadro1.elegido = false;
    cuadro2.elegido = false;
    cuadro3.elegido = false;
}
//inicia el evento para cargar ventana
window.addEventListener("load", carga, false);

/*Funciones para mostrar cuando el mouse esta encima*/
function ratonencima(creacion, valor, creacioncaja){
    if(valor==1){
        document.querySelector("#activo").style.backgroundColor = "black";
        document.querySelector("#activo1").style.backgroundColor = "";
        document.querySelector("#activo2").style.backgroundColor = "";
    }
    else if(valor==2){
        document.querySelector("#activo").style.backgroundColor = "";
        document.querySelector("#activo1").style.backgroundColor = "black";
        document.querySelector("#activo2").style.backgroundColor = "";
    }
    else if(valor==3){
        document.querySelector("#activo").style.backgroundColor = "";
        document.querySelector("#activo1").style.backgroundColor = "";
        document.querySelector("#activo2").style.backgroundColor = "black";
    }
    else{
        var circulos = document.querySelectorAll(".activo");
        for(i=0;i<circulos.length;i++){
            circulos[i].style.backgroundColor = "";
        }
    }
};
function encima1(){
    ratonencima(cuadro1,1);
};
function encima2(){
    ratonencima(cuadro2,2);
};
function encima3(){
    ratonencima(cuadro3,3);
};
/*funciones para saber si no esta arriba el puntero del mouse*/
function fuera(creacion, valore, creacioncaja){
    if(valore==1){
        document.querySelector("#activo").style.backgroundColor = "chocolate";
        document.querySelector("#activo1").style.backgroundColor = "";
        document.querySelector("#activo2").style.backgroundColor = "";
    }
    else if(valore==2){
        document.querySelector("#activo").style.backgroundColor = "";
        document.querySelector("#activo1").style.backgroundColor = "chocolate";
        document.querySelector("#activo2").style.backgroundColor = "";
    }
    else if(valore==3){
        document.querySelector("#activo").style.backgroundColor = "";
        document.querySelector("#activo1").style.backgroundColor = "";
        document.querySelector("#activo2").style.backgroundColor = "chocolate";
    }else{
        var circulos = document.querySelectorAll(".activo");
        for(i=0;i<circulos.length;i++){
            circulos[i].style.backgroundColor = "";
        }
    }
};
function fuera1(){
    fuera(cuadro1);
};
function fuera2(){
    fuera(cuadro2);
};
function fuera3(){
    fuera(cuadro3);
};
/*Funciones que ayudan a hacer el evento de click*/
function tocar (creacion) {
    if(creacion.elegido){
        movimiento(creacion);
    }else{
        reiniciar();
    };
};
function tocar1(){
    cuadro1.elegido = !cuadro1.elegido;
    tocar(cuadro1);
};
function tocar2(){
    cuadro2.elegido = !cuadro2.elegido;
    tocar(cuadro2);
};
function tocar3(){
    cuadro3.elegido = !cuadro3.elegido;
    tocar(cuadro3);
};