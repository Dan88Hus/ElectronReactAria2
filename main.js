// const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer')
const { app, BrowserWindow, Menu, Tray } = require("electron")

const path = require('path')
const url = require('url')
const trayIcon = path.join(__dirname, 'assets', 'images', '256x256.png');
const trayIconIco = path.join(__dirname, 'assets', 'images', '256x256.ico');
const isDev = !app.isPackaged

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        minWidth: 360,
        minHeight: 400,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavascript: true,
            contextIsolation: true
        }
    })

    // load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // // Open the DevTools.
    // isDev && mainWindow.webContents.openDevTools()
    // // reload configuration
    // if (isDev) {
    //     require('electron-reload')(__dirname, {
    //         electron: path.join(__dirname, 'node_modules', '.bin', 'electron'), hardResetMethod: 'exit'
    //         // electron: require(`${__dirname}/node_modules/electron`)
    //     })
    // } else {
    //     console.log("!isDev")
    // }
}

if (process.platform === 'darwin') {
    app.dock.setIcon(trayIcon);
}
let tray = null

// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    // creates Menu
    const template = require('./menu/Menu').createTemplate(app)
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
    if (process.platform === "win32"){
        tray = new Tray(trayIconIco)
        tray.setContextMenu(menu)
    }
    if (process.platform === "darwin" || "linux"){
        tray = new Tray(trayIcon)
        tray.setContextMenu(menu)
    }
    // add react developer tools to chromium
    // console.log(isDev)
    // isDev && installExtension(REDUX_DEVTOOLS)
    //     .then((name) => console.log(`Added Extension:  ${name}`))
    //     .catch((err) => console.log('An error occurred: ', err))
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