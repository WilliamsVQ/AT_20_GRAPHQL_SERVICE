const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (_, _, cb) {
        cb(null, process.env.UPLOADS_PATH)
    },
    filename: function (_, file, cb) {
        const unique_suffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const ext = path.extname(file.originalname);
        const file_name = path.basename(file.originalname, ext);

        cb(null, file_name + '-' + unique_suffix + ext)
    }
})


const compiler_middleware = multer({
    storage
}).single('file');


module.exports = compiler_middleware;
