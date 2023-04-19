const { exec } = require('child_process');
const { stdout, stderr } = require('process');

class Compiler{


    constructor(){
    }

    executeCommand(command, callback = () => {}){
        return new Promise((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve(callback(stdout, stderr));
            });
        });
    }

    run(/*file_path*/){
        //abstrac class
        throw new Error('Abstract class you must implement this method');
    }


}

module.exports = Compiler;