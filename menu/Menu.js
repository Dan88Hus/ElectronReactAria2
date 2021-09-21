exports.createTemplate = app => {
    return [
        {
            label: 'Menu',
            submenu: [{
                label: 'Exit',
                click: () => {
                    app.quit();
                }
            }]
        },
        {
            label: 'Reporting',
            submenu: [{
                label: 'Report',
                click: () => {
                    const { app, BrowserWindow} = require("electron")
                    let mainWindow

                    function createWindow() {
                        mainWindow = new BrowserWindow({
                            width: 600,
                            height: 400,
                            backgroundColor: 'white',
                            webPreferences: {
                                // nativeWindowOpen: true,
                                nodeIntegration: true,
                                worldSafeExecuteJavascript: true,
                                contextIsolation: false
                            }
                        })

                        // load the report.html of the app.
                        mainWindow.loadFile('report.html')
                    }

                    app.whenReady()
                    .then(() => {
                      createWindow();
                    });
                }
            }]
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label: "Undo",
                    accelerator: "CmdOrCtrl+Z",
                    selector: "undo:"
                },
                {
                    label: "Redo",
                    accelerator: "Shift+CmdOrCtrl+Z",
                    selector: "redo:"
                },
                {
                    type: "separator"
                },
                {
                    label: "Cut",
                    accelerator: "CmdOrCtrl+X",
                    selector: "cut:"
                },
                {
                    label: "Copy",
                    accelerator: "CmdOrCtrl+C",
                    selector: "copy:"
                },
                {
                    label: "Paste",
                    accelerator: "CmdOrCtrl+V",
                    selector: "paste:"
                },
                {
                    label: "Select All",
                    accelerator: "CmdOrCtrl+A",
                    selector: "selectAll:"
                }
            ]
        }, {
            label: 'View',
            submenu: [{
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click: (_, focusedWindow) => {
                    if (focusedWindow) {
                        // on reload, start fresh and close any old
                        // open secondary windows
                        if (focusedWindow.id === 1) {
                            const { BrowserWindow } = require('electron');
                            BrowserWindow.getAllWindows().forEach(win => {
                                if (win.id > 3) {
                                    win.close();
                                }
                            })
                        }
                        focusedWindow.reload()
                    }
                }
            },
            {
                label: 'Toggle Full Screen',
                accelerator: (() => {
                    if (process.platform === 'darwin') {
                        return 'Ctrl+Command+F'
                    } else {
                        return 'F11'
                    }
                })(),
                click: (_, focusedWindow) => {
                    if (focusedWindow) {
                        focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
                    }
                }
            }, {
                label: 'Toggle Developer Tools',
                accelerator: (() => {
                    if (process.platform === 'darwin') {
                        return 'Alt+Command+I'
                    } else {
                        return 'Ctrl+Shift+I'
                    }
                })(),
                click: (_, focusedWindow) => {
                    if (focusedWindow) {
                        focusedWindow.toggleDevTools()
                    }
                }
            }, {
                type: 'separator'
            }, {
                label: 'App Menu Demo',
                click: function (_, focusedWindow) {
                    if (focusedWindow) {
                        const options = {
                            type: 'info',
                            title: 'Application Menu Demo',
                            buttons: ['Ok', 'Cancel'],
                            message: 'This demo is for the Menu section, showing how to create a clickable menu item in the application menu.'
                        }
                        const { dialog } = require('electron');
                        dialog.showMessageBox(focusedWindow, options)
                    }
                }
            }]
        },
        {
            label: 'Github',
            role: 'help',
            submenu: [{
                label: 'Github Repo.',
                click: () => {
                    // The shell module provides functions related to desktop integration.
                    // An example of opening a URL in the user's default browser:
                    const { shell } = require('electron');
                    shell.openExternal('https://github.com/Dan88Hus/ElectronReactAria2')
                }
            }]
        }]
}