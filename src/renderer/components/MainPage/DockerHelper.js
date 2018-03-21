export default {
  mounted: (config, containerslist) => {
    const containers = config['DOCKER']
    for (const i in containers) {
      containerslist.push({text: i, value: containers[i]})
    }
  }
}
