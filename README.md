# TurboPi

Start with vanilla Raspbian.

End up with a more useful Raspbian startpoint.

### Features
- Install software from apt repositories
- Install modules for python and nodered
- Setup network storage with SAMBA
- Hands-free docker installation and setup
- Other goodies like ngrok, motioneye and 
  more!

### Download
You will find desktop app in the Releases section. Available for Windows 10 and Ubuntu/Linux Mint.

### Screenshots

### Developing TurboPi
```
yarn
yarn dev
```
Also, because there is a native dependency (nodepty), if you dev after you build, you make need to run .\node_modules\.bin\electron-rebuild.cmd

### Building TurboPi
```
yarn
yarn build
```

Before running yarn build 
Open package.json and change script postInstallerBuilder to postInstall


