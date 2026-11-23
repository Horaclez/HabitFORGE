const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 480, height: 860, minWidth: 360, minHeight: 600,
    backgroundColor: '#050507', autoHideMenuBar: true,
    icon: path.join(__dirname, '..', 'build', 'icon.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
}
app.setAppUserModelId('com.habitforge.app');
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
