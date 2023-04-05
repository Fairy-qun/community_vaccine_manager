const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Inoculate = seq.define('inoculate', {
  inoculate_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种疫苗名称'
  },
  inoculate_injection: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种针剂'
  },
  inoculate_date: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种日期'
  }
})

// Inoculate.sync({ force: true })

module.exports = Inoculate
