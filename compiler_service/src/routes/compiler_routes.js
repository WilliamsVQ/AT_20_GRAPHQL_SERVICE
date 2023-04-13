const express = require('express');
const router = express.Router();
const CompilerController = require('../controllers/compiler_controller.js');
const compiler_middleware = require('../middlewares/compiler_middleware.js');

const compiler = new CompilerController();


router.post('/', compiler_middleware , compiler.get);


module.exports = router;
