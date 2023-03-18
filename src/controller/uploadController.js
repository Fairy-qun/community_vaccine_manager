const path = require('path')
const { success } = require('../content')

class UploadControoler {
  async upload(ctx, next) {
    const { file } = ctx.request.files
    if (file) {
      ctx.body = success({
        data: {
          file_name: path.basename(file.filepath)
        },
        msg: '上传文件成功'
      })
    } else {
      ctx.body = fail({ msg: '上传文件失败' })
    }
  }
}

module.exports = new UploadControoler()
