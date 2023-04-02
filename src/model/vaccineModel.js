const { DataTypes, STRING } = require('sequelize')
const seq = require('../db/seq')

const Vaccine = seq.define('vaccine', {
  vaccine_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '疫苗名称'
  },
  vaccine_batch: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '疫苗批次'
  },
  vaccine_categroy: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '疫苗种类'
  },
  vaccine_manufacturer: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '生产厂商'
  },
  vaccine_productDate: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '生产日期'
  },
  vaccine_overdueDate: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '过期日期'
  },
  vaccine_standard: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '注射规范'
  },
  vaccine_explain: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: '注射说明'
  }
})

// Vaccine.sync({ force: true })
module.exports = Vaccine
