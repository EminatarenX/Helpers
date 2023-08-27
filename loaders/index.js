const boton1 = document.getElementById('btn-1')
const boton2 = document.getElementById('btn-2')
const boton3 = document.getElementById('btn-3')

let cargando = false

let loader1 = document.getElementById("loader1")
let loader2 = document.getElementById("loader2")
let loader3 = document.getElementById("loader3")

loader1.style.display = "none"
loader2.style.display = "none"
loader3.style.display = "none"


function mostrarLoader(loader) {
		cargando = true
    
    if(cargando){
    	boton1.disabled = true
      boton2.disabled = true
      boton3.disabled = true
    }
    loader.style.display = "flex";
    
    setTimeout(() => {
    
    	cargando = false
      
    	boton1.disabled = false
      boton2.disabled = false
      boton3.disabled = false
      
      loader.style.display = 'none'
    },5000)
    
}

boton1.addEventListener("click", function() {
    mostrarLoader(loader1);
});

boton2.addEventListener("click", function() {
    mostrarLoader(loader2);
});

boton3.addEventListener("click", function() {
    mostrarLoader(loader3);
});