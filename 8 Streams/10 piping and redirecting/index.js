process.stdin.setEncoding('utf-8')

process.stdin.on("data", (chunk) =>{
    console.log(chunk)  //if we don't set encoding then we'll get buffer data : <Buffer 68 69 69 0d 0a> 0a is for \n 
})

//* if we want to get data from echo then run : echo "hii" |  node index.js


// app.js is out and index.js in 
//* if we want to get data from app.js then we have to pipe, run like this : node app.js | node .\index.js


// ! NOTE : stderr will not pipe, only stdin or stdout will pipe 
// ! but we can redirect stderr too node app.js > ouput.txt

// how to redirect data into a file : 
// we can use redirection using > or >>, for exp : node app.js > output.txt