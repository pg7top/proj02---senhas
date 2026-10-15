const {app, BrowserWindow } = require("electron")
app.whenReady()
.then(function(){
  const janela = new BrowserWindow({
    autohideMenuBar: true,
    height: 600,
    resizable: false,
    width:800
  })

  janela.loadFile("./index.html")

})