const test = async (ctx, next) => {
  ctx.body = '找工作'
  next()
}

const middlewares = [test]

module.exports = middlewares
