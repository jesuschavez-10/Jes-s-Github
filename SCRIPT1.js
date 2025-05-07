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
//console.log(varTemporal); // varTemporal no es definido afuera de funcion 





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
    vTexto3[0].innerHTML="Elemento 1er cambiado por TagDom1";
    vTexto3[13].innerHTML="Elemento ultimo h2 cambiado por TagDOM1";
    vTexto3[13].style.color="magenta";
    // indice 10 es el 11vo elemento h2
    console.log("tamaño del array=",vTexto3.length);
    vTexto3[13].insertAdjacentHTML("beforeEnd", "<br>tamaño de h2 =" + vTexto3.length) ;
    console.log("Valor de totalh2=",totalh2);
    console.log("tipo de variable totalh2=", typeof totalh2);
}

window.vTexto1="";

function FAgregarTextoPermanente(){
    let textoAdicional ="texto adicional para concatenar";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1 =",typeof vTexto1);
    console.log(vTexto1); 
}

function FcrearH1(){
    var elemento =document.getElementById("idCrearH1");
    var nuevoH1 =document.createElement("H1");
    var texto = document.createTextNode("Texto colocado en linea");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);
}

function FCapturarNombre(){

    const vTexto1 = document.getElementById("NOMBRE");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("CLAVE") ;
   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="blue";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 ="";
    vTexto3.value=valor1;
   //textarea ya captura el nombre
   //foreach recorre todo el contenido del array de la clase datosPersonales

    vTexto2.forEach(input => {
        valor2 =valor2 + `${input.name}: ${input.value}: ${input.id} \n` ; //alt+96 
        input.style.border="2px solid orange"
    // para comilas tipotexto permiten colocar varables del form y convertirlas a texto mediate $
      });
vTexto2[1].style.border="2px solid red"
    document.getElementById('OBSERVACION').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

function FUsoFor1(){
const vTextoClass = document.getElementsByClassName("classFOR1");
var vTextoTotal="";
// como length=4 --> ira desde o hasta 3
for(let i=0 ; i< vTextoClass.length ; i++)
{
    vTextoClass[i].style.borde ="2px solid red"
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText +'-';
} // fin de for
var nuevoH1 =document.createElement("h1");
var texo =document.createTextNode
}