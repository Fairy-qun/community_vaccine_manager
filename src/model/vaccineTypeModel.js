const { DataTypes, STRING } = require('sequelize')
const seq = require('../db/seq')

const VaccineType = seq.define('vaccineType', {
  vaccineType_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '分类名称'
  }
})

// VaccineType.sync({ force: true })
module.exports = VaccineType
