const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname);
const compilerService = require('../../src/services');


describe('compiler_service tests', () => {

    //inicializate the compiler service before each test
    let compiler;
    beforeEach(() => {
        compiler = new compilerService();
    });


    it('should return a right response from python compiler', async () => {

        const resp = await compiler.run(filePath+"/hello.py", 'python');

        const expectedResp = {
            "stdout": "Hello World\n",
            "stderr": "",
        }
        expect(resp).toEqual(expectedResp);
    });

    it('should return a right response from C# compiler', async () => {

        const resp = await compiler.run(filePath+"/hello.cs", 'c_sharp');

        const expectedResp = {
            "stdout": "Hello World\n",
            "stderr": "",
        }
        expect(resp).toEqual(expectedResp);
    });

    it('should return a right response from java compiler', async () => {

        const resp = await compiler.run(filePath+"/hello.java", 'java');

        const expectedResp = {
            "stdout": 'Hello World\n',
            "stderr": ""
        }
        expect(resp).toEqual(expectedResp);
    });

    it('should return a right response from javascript compiler', async () => {

        const resp = await compiler.run(filePath+"/hello.js", 'javascript');

        const expectedResp = {
            "stdout": "Hello World\n",
            "stderr": "",
        };
        expect(resp).toEqual(expectedResp);
    });
});