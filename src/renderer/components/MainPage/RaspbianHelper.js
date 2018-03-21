export default {
  mounted: (config, interfacelist) => {
    const interfaces = config['RASPICONFIG']
    for (const i in interfaces) {
      interfacelist.push({text: i, value: interfaces[i]})
    }
  }
}
