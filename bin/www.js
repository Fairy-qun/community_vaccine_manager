const { server } = require('../src/main')
const { SERVER_PORT } = require('../src/config/config.default')

const listenHandler = () => {
  console.log(`服务已开启：http://localhost:${SERVER_PORT}/api`)
}

server.listen(SERVER_PORT, listenHandler)
