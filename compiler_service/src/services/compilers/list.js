const JavaCompiler = require('./java_compiler.js');
const PythonCompiler = require('./python/python_compiler.js');
const CSharpCompiler = require('./cSharp_compiler.js');
const JavaScriptCompiler = require('./javascript_compiler.js');


const COMPILERS = {
   'java': new JavaCompiler(),
   'python': new PythonCompiler(),
   'c_sharp': new CSharpCompiler(),
   'javascript':new JavaScriptCompiler()
}

module.exports = COMPILERS;