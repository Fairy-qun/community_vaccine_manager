const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const InoculatePoint = seq.define('inoculatePoint', {
  inoculatePoint_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种点名称'
  },
  inoculatePoint_address: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种点地点'
  },
  inoculatePoint_state: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 1,
    comment: '接种点状态 1：可使用 0：不可使用'
  }
})

// InoculatePoint.sync({ force: true })

module.exports = InoculatePoint
