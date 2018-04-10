export default {
  mounted: (config, containerslist) => {
    const containers = config['MISCELLANEOUS']
    for (const i in containers) {
      containerslist.push({text: i, value: containers[i]})
    }
  }
}
