const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Inoculate = seq.define('inoculate', {
  vaccine_batch: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种疫苗批次'
  },
  inoculate_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种疫苗名称'
  },
  resident_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '居民姓名'
  },
  // inoculate_injection: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   comment: '接种针剂'
  // },
  inoculate_date: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种日期'
  },
  inoculatePoint_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种点地址'
  },
  inoculatePoint_address: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '接种地址'
  }
})

// Inoculate.sync({ force: true })

module.exports = Inoculate
