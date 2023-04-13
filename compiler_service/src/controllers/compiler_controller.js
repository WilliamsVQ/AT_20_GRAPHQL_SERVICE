const CompilationService = require('../services');

class CompilerController{

    async get(req, res){
        const service = new CompilationService();

        const { language } = req.body;
        const { version } = req.body;
        const  saved_file_path = `${req.file.destination}/${req.file.filename}`;

        const response = await service.run(saved_file_path, language, version)
            .catch(err => ({'error': err.message}));
        res.status(404).send(response);
    }
}


module.exports = CompilerController;