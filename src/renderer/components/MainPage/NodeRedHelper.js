export default {
  mounted: (userConfig, packages) => {
    const noderedModules = userConfig['NODERED_MODULES']
    noderedModules.forEach((aptPackage) => {
      packages.push({ value: aptPackage })
    })
  }
}
