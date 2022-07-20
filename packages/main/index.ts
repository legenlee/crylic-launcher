import { app, BrowserWindow } from 'electron';
import { join } from 'path';

let win: BrowserWindow | null = null;

async function createWindow() {
  win = new BrowserWindow({
    // titleBarStyle: 'hidden',
    webPreferences: {
      preload: join(__dirname, './preload.cjs'),
    },
  });

  if (app.isPackaged) {
    win.loadFile(join(__dirname, '../renderer/index.html'));
  } else {
    const url = `http://${process.env['VITE_DEV_SERVER_HOST']}:${process.env['VITE_DEV_SERVER_PORT']}`;

    win.webContents.openDevTools();
    win.loadURL(url);
  }
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  win = null;
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length === 0) {
    createWindow();
  }
});
