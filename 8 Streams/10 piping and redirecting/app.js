process.stdout.write("hii stdout from app.js");


// ! but we can redirect stderr too, node app.js > ouput.txt
// but it will not save into ouput.txt , only stdout will print , we if want to print stderr then we'll have to do like this : node app.js 2> output.txt
// >> is used to redirect with append, node app.js >> ouput.txt 2>> output.txt 
process.stderr.write("hii stderr from app.js \n");


// if we want to read from a file and input in strdin then we've to use like this : 
// node index.js < ouput.txt ( but is not working in windows)