const multer = require('multer');

const storage = multer.diskStorage({
    destination (req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
      const ext = file.originalname.split('.').pop();
      cb(null, `${req.body.title}-${uniqueSuffix}.${ext}`);
    }
})

module.exports = storage;
