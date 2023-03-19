const { fail } = require('../content')
const { getResidentInfo } = require('../service/residentService')

// 验证字段是否填写完整
const residentValidator = async (ctx, next) => {
  const data = ctx.request.body
  for (let key in data) {
    if (!data[key]) {
      ctx.status = 400
      ctx.body = fail({
        msg: '所需字段未填写完整'
      })
    }
  }

  await next()
}

// 判断是否已经存在相应的居民信息
const verifyResident = async (ctx, next) => {
  const { resident_numberId, resident_mobile } = ctx.request.body

  const res = await getResidentInfo({ resident_numberId })
  if (res) {
    ctx.body = fail({
      msg: '不能重复添加同一人信息'
    })
    return
  }
  await next()
}

module.exports = {
  residentValidator,
  verifyResident
}
