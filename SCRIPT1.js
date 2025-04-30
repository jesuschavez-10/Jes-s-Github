let VarGlobal1="texto de variable global"
function FCambioColor(){
var varTemporal=  "texto temporal"
let vTexto1 = document.getElementById("ejmDOM1")
vTexto1.textContent= "texto cambio por Funcion FCambioColor"; 
vTexto1.style.color="blue";
vTexto1.insertAdjacentHTML("beforeEnd",
                       "<br> este texto es adicional <br> ");
    vTexto1.style.backgroundColor="orange";
    console.log(vTexto1); 
    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    //la variable global se puede utilizar dentro de cualquier funcion 
}

vTexto1= "texto fuera de funcion"; //vTexto1 no es la variable de la funcion 
console.log(vTexto1.innerText);
console.log(varTemporal); // varTemporal no es definido afuera de funcion 

function FCambioClase1() {
let vTexto2=document.getElementsByClassName("classDOM1");
vTexto2[1].innerText="Elemento [1] del arreglo \n de clase classDOM1"; 
vTexto2[1].style.color="blue" ;
console.log("Tamaño del array=",vTexto2.length);
console.log("tipo de variable vTexto2",typeof vTexto2[1]);
// indice 1 es el 2do elemento 

}

function FCambioTag1() {
    let vTexto3=document.getElementsByTagName('h2');
    vTexto3[0],innerHTML="Elemento 1er cambiado por TagDom1";
    vTexto3[6].innerHTML="Elemento ultimo h2 cambiado por TagDOM1";
    vTexto3[13].style.color="magenta";
    // SE COLOCA DE INDICE 6 POR SER EL 7MO ELEMENTO H2 DE LA PAG WED INDEX.HTML 
}

