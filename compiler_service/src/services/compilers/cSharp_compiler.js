const Compiler = require('../compiler.js');

class CSharpCompiler extends Compiler {

    #compiler_command = 'csc';
    #execute_and_read_command = 'mono';

    constructor() {
        super('c_sharp','.cs');
    }

    async compile(file_path) {
        const out_file_path = './src/services/compilers/compiled_files/temp.exe';
        const command_to_compile = `${this.#compiler_command} -out:${out_file_path} ${file_path}`

        await this.executeCommand(command_to_compile);

        return out_file_path;
    }

    async executeAndRead(file_path) {
        const command_to_run = `${this.#execute_and_read_command} ${file_path}`;

        return await this.executeCommand(command_to_run, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }

     async run(file_path) {
        const new_file_path = await this.compile(file_path);

        return await this.executeAndRead(new_file_path);
    }
}

module.exports = CSharpCompiler;