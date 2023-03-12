/**
 * 成功函数
 */
const success = ({ code = 0, data, msg = '获取数据成功' }) => {
  return {
    code,
    data,
    msg
  }
}

/**
 * 失败函数
 */
const fail = ({ code = 1, data = '', msg = '获取数据失败' }) => {
  return {
    code,
    data,
    msg
  }
}
module.exports = {
  success,
  fail
}
