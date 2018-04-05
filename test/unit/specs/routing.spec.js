import DockerHelper from '@/components/MainPage/DockerHelper'

test('replenish docker containers', () => {
  const config = {
    'DOCKER': {
      'web': true,
      'grafana': false
    }
  }
  let dockerContainers = []
  var expected = [
    {
      text: 'web',
      value: true
    },
    {
      text: 'grafana',
      value: false
    }
  ]
  DockerHelper.mounted(config, dockerContainers)
  expect(dockerContainers).toEqual(expected)
})
