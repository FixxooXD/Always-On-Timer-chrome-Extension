# TimeTag

![Logo](https://github.com/FixxooXD/Always-On-Timer-chrome-Extension/blob/main/public/assets/icons/logo128.png)

## Description

**New Tab Timer** is a lightweight Chrome extension that displays a customizable timer on every new tab opened in your browser. It helps you stay on track with your tasks, keep track of time, and manage productivity while using your browser.

The extension features a clean, minimalistic design, with options to customize the timer and label according to your needs. Whether you want to set a countdown for a specific task or just track the time spent on an activity, New Tab Timer makes it simple.

## Features

- **Customizable Timer**: Set your own target date and time.
- **Persistent Settings**: Your timer settings are saved and loaded every time you open a new tab.
- **Clean and Simple UI**: Minimal design for ease of use.
- **Automatic Timer Display**: The timer shows up on every new tab opened in the browser.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the directory where this project is located.
5. The New Tab Timer extension will now be installed and visible in your extension tray.

## Manifest

The following are the key properties of the `manifest.json` file used to define the Chrome extension:

```json
{
    "manifest_version": 3,
    "name": "New Tab Timer",
    "description": "A timer displayed on every new tab in the browser.",
    "version": "1.0",
    "action": {
        "default_popup": "index.html",
        "default_title": "New Tab Timer"
    },
    "chrome_url_overrides": {
        "newtab": "index.html"
    },
    "permissions": [
        "storage"
    ],
    "icons": {
        "16": "public/assets/icons/icon-16.png",
        "32": "public/assets/icons/icon-32.png",
        "48": "public/assets/icons/icon-48.png",
        "128": "public/assets/icons/icon-128.png"
    },
    "background": {
        "service_worker": "background.js"
    },
    "host_permissions": [
        "<all_urls>"
    ]
}
```
## File Structure
```File Structure

├── public
│   ├── assets
│   │   └── icons
│   │       ├── icon-16.png
│   │       ├── icon-32.png
│   │       ├── icon-48.png
│   │       └── icon-128.png
├── src
│   ├── background.js
│   ├── index.html
│   └── App.js
├── README.md
├── manifest.json
```
### Usage
Once installed, the timer will automatically be displayed every time you open a new tab in the Chrome browser.
You can click on the extension icon in the toolbar to customize your timer settings, including setting a target date or adding a custom label.

## Index snap
![Logo](https://github.com/FixxooXD/Always-On-Timer-chrome-Extension/blob/main/src/assets/snapshots/Index.png)

## Settings snap
![Logo](https://github.com/FixxooXD/Always-On-Timer-chrome-Extension/blob/main/src/assets/snapshots/Settings.png)