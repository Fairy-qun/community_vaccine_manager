const { DataTypes } = require('sequelize')
const seq = require('../db/seq')

const Resident = seq.define('resident', {
  resident_name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '姓名'
  },
  resident_gender: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '性别'
  },
  resident_age: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '年龄'
  },
  resident_mobile: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '手机号'
  },
  resident_numberId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: '身份证号'
  },
  resident_address: {
    type: DataTypes.STRING,
    comment: '居住地址'
  },
  resident_isInoculateFirst: {
    type: DataTypes.BOOLEAN,
    comment: '是否接种第一针'
  },
  resident_isInoculateSecond: {
    type: DataTypes.BOOLEAN,
    comment: '是否接种第二针'
  },
  resident_isInoculateThird: {
    type: DataTypes.BOOLEAN,
    comment: '是否接种第三针或加强针'
  }
})

// Resident.sync({ force: true })

module.exports = Resident
