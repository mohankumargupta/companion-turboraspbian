export default {
  mounted: (userConfig, packages) => {
    const aptPackages = userConfig['RASPBIAN_APT_INSTALL']
    aptPackages.forEach((aptPackage) => {
      packages.push({ value: aptPackage })
    })
  }
}
