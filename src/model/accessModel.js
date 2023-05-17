const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Access = seq.define('access', {
  access_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '权限名称'
  },
  access_path: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '权限路径'
  },
  access_state: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    comment: '权限状态 0:不可以 1:可用'
  }
})

Access.sync({ force: true })

module.exports = Access
