const COMPILERS = require('./compilers/list.js');

class CompilationService{
    #compilers;

    constructor(){
        this.#compilers = COMPILERS;
    }

    async run(file_path, language, version){
        const compiler = this.#compilers[language];
        if(!compiler){
            throw new Error('Compiler not found');
        }

        return await compiler.run(file_path, version);
    }
}

module.exports = CompilationService;