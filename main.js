const { app, BrowserWindow } = require("electron")

const path = require('path')
const url = require('url')

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 360,
        minHeight: 400,
        backgroundColor: 'white'
    })

    // load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    mainWindow.webContents.openDevTools()
}

// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    // add react developer tools to chromium
    // installExtension(REACT_DEVELOPER_TOOLS)
    // .then((name) => console.log(`Added Extension:  ${name}`))
    // .catch((err) => console.log('An error occurred: ', err))
    createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On MacOS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On MacOS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
})