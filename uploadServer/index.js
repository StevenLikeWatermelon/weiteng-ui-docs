const express = require('express')
const multer = require('multer')
const app = express()

app.use('/uploadServer/uploads/', express.static('uploadServer/uploads/'))

const upload = multer({
  storage: multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploadServer/uploads/')
    },
    filename: function(req, file, cb) {
      // file.originalname上传文件的原始文件名
      const changedName = (new Date().getTime()) + '-' + file.originalname
      cb(null, changedName)
    }
  })
})
// 跨域
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// 单个文件上传
app.post('/upload/single', upload.single('file'), (req, res) => {
  res.json({
    code: '0',
    type: 'single',
    ...req.file,
    path: `/${req.file.path}`
  })
})

// 多个文件上传
app.post('/upload/multer', upload.array('multerFile'), (req, res) => {
  console.log(req.files)
  const fileList = []
  req.files.map((elem) => {
    fileList.push({
      originalname: elem.originalname
    })
  })
  res.json({
    code: '0000',
    type: 'multer',
    fileList: fileList
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功！')
})
