const Compiler = require('../compiler');

class JavaCompiler extends Compiler{

    #compile_and_execute_command = 'java';

    constructor(){
        super('java','.java');
    }

    async compileAndRead(file_path){
        const command = `${this.#compile_and_execute_command} ${file_path}`;

        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }

    async run(file_path){
        return await this.compileAndRead(file_path);
    }
}

module.exports = JavaCompiler;