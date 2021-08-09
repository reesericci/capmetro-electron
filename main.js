const { app, BrowserWindow, BrowserView } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: win.getBounds().width, height: win.getBounds().height  })
  view.setAutoResize({width: true, height: true});
  view.webContents.loadURL('https://capmetro.org/planner')
}

app.whenReady().then(() => {
  createWindow()
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


