// GLOBALS

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules
// module       - info about current module (file)
// process      -inof about env where the program is being executed

// console.log(__dirname);
// console.log("\n\n");
// console.log(__filename);
// console.log("\n\n");
// console.log(require);
// console.log("\n\n");
// console.log(module);
// console.log("\n\n");
// console.log(process);

// doesnt exit but want it to
const runit = function(){

    let stop = false;

    setInterval(function(){
        if (stop){
            process.exit(0);
        }
        console.log("hello world");
    }, 1000);

    setTimeout(function(){
        stop = true;
    }, 11000)
}

runit();
