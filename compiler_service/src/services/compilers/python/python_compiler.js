const Compiler = require('../../compiler.js');
const VERSIONES = require('./python_versionMap.js');

class PythonCompiler extends Compiler {

    #interpreter_command;
    #compile_and_execute_command = 'python3';

    constructor() {
        super('python','.py');
    }

    async interpret(file_path){
        const command = `${this.#compile_and_execute_command} ${file_path}`;

        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
            console.log(stdout);
            console.log(stderr);
        });

    }

    async run(file_path, version){
        return await this.interpret(file_path, version);
    }

}

module.exports = PythonCompiler;
