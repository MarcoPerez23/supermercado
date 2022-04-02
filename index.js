let nom = document.getElementById('nom')
let pass = document.getElementById('pass')
let crear = document.getElementById('crear')
let ingreso = document.getElementById('ingreso')

crear.addEventListener('click',function(event){
    window.comunicacion.nuevoUsuario({nombre:nom.value, pass:pass.value})
})

ingreso.addEventListener('click',function(event){
    window.comunicacion.ingresar({nombre:nom.value, pass:pass.value})
})