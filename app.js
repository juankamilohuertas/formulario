let cuerpo = document.getElementsByTagName("body")[0];
let entradas = document.querySelectorAll(".conteHijos input");
let botonEnvio = document.querySelector(".btnEnvio");
let validacion = ()=>{
  if(entradas[0].value && entradas[1].value
    && entradas [2].value && entradas[3].value != ""){
        cuerpo.innerHTML = `
        <div class="conteData"><p>Exelente Funciona... jsjsjsj 😜✌😊
        </p></div>
        `;
    }else{
        alert("Llena todos los campos");
    }
}
botonEnvio.addEventListener("click", validacion);
