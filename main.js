const { app, BrowserWindow} = require('electron')
  
function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 1280, height: 720, useContentSize: true, minHeight:720, minWidth: 770, icon:"app/images/icon.ico",titleBarStyle: "hiddenInset" ,webPreferences: {devTools: false, }})

    // and load the index.html of the app.
    mainWindow.loadFile('app/index.html')
    mainWindow.setMenu(null);

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
        app.quit()
    })

    
}

app.on('ready', createWindow)

  
app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createWindow()    
    }
  })