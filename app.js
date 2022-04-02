const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
let ventana

function create_window(){
    ventana = new BrowserWindow({
        width: 500,
        height: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(),'/preloads/preloadLogin.js')
        }
    })
    ventana.loadFile('index.html')
}

app.whenReady()
.then(create_window)
.then(console.log('app ready'))

//probe creando una funcion para cargar el loadFile pero tampoco carga la lista

function ingresarApp(){
    console.log('23')
    ventana.loadFile('lista.html')
}

ipcMain.on('nuevoUsuario', function(event, args){
    console.log(args)
})

ipcMain.on('ingresar', function(event, args){
    console.log(args)
    ingresarApp()
})