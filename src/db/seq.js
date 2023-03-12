const { Sequelize } = require('sequelize')

const { MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } = require('../config/config.default')

const seq = new Sequelize(MYSQL_DATABASE, MYSQL_USERNAME, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
  port: MYSQL_PORT,
  timezone: '+08:00'
})

// seq
//   .authenticate()
//   .then(res => {
//     console.log('连接数据库成功')
//   })
//   .catch(err => {
//     console.log('连接数据库失败')
//   })

module.exports = seq
