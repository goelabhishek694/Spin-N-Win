let input=process.argv.slice(2); // array input is created which contains the command written in the terminal ignoring the first two arguments . firts two arguments are node and file name 
let cmd=input[0];
let helpfnObj=require("./commands/help");
let organizeObj=require("./commands/organize");
let viewfnObj=require("./commands/view");

switch(cmd){
    case "view":
        //view as tree 
        //view as flat
        // console.log("view command executed");
        viewfnObj.viewfn(input[1], input[2]);
        break;
    case "organize":
        // console.log("view command executed");
        organizeObj.organizeFn();
        break;
    case "help":
        helpfnObj.helpfn();
        break;
    default:
        console.log("Wrong command. Type help to see the list of all the commands")    
}