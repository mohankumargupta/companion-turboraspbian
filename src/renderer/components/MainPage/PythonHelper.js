export default {
  mounted: (userConfig, python2Apt, python3Apt, python2Pip, python3Pip) => {
    const py2Apt = userConfig['PYTHON2_APT_MODULES']
    const py3Apt = userConfig['PYTHON3_APT_MODULES']
    const py2Pip = userConfig['PYTHON2_PIP_MODULES']
    const py3Pip = userConfig['PYTHON3_PIP_MODULES']

    py2Apt.forEach((aptPackage) => {
      python2Apt.push({ value: aptPackage })
    })

    py3Apt.forEach((aptPackage) => {
      python3Apt.push({ value: aptPackage })
    })

    py2Pip.forEach((aptPackage) => {
      python2Pip.push({ value: aptPackage })
    })

    py3Pip.forEach((aptPackage) => {
      python3Pip.push({ value: aptPackage })
    })
  }
}
