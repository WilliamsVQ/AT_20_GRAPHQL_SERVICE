/**
@javascript_compiler.js Copyright(c) 2023 Jalasoft
2643 Av Melchor Perez de Olguin, Colquiri Sud, Cochabamba, Bolivia.
Av.General Inofuentes esquina Calle 20, Edificio Union No1376, La Paz, Bolivia
All rights reserved
This software is the confidential and proprietary information of
Jalasoft,ConfidentialInformation"). You shall not
disclose such Confidential Information and shall use it only in
accordance with the terms of the license agreement you entered into
with Jalasoft
*/
const Compiler = require('../compiler.js');

class JavaScriptCompiler extends Compiler{
//Command to compile in node
    #compile_and_execute = 'node';

    constructor(){
        super('node','.js');
    }
//Returns a json structure with the output of the file that was sent to compile with node.
    async compileRead(file_path){
       
        const command = `${this.#compile_and_execute} ${file_path}`;
        return await this.executeCommand(command, (stdout, stderr) => {
            return {stdout, stderr};
        });
    }
//Calls compileRead function.
    async run(file_path){
        return await this.compileRead(file_path);
    }
}

module.exports = JavaScriptCompiler;