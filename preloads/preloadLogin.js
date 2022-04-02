const {ipcRenderer, contextBridge, ipcMain} = require('electron')

contextBridge.exposeInMainWorld(
    'comunicacion',
    {
        nuevoUsuario: (datos) => ipcRenderer.send('nuevoUsuario',datos)
        ,
        ingresar: (datos) => ipcRenderer.send('ingresar',datos)
        ,
        nuevosDatos: (datos) => ipcRenderer.send('nuevosDatos',datos)
        ,
        
    }
)