const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Role = seq.define('role', {
  role_name: {
    type: DataTypes.STRING,
    // allowNull: false,
    comment: '角色名称'
  },
  role_description: {
    type: DataTypes.STRING,
    defaultValue: '',
    comment: '角色描述'
  },
  role_state: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    comment: '角色状态 0:不可用 1:可用'
  }
})
// Role.sync({ force: true })

module.exports = Role
