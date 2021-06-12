let fs = require("fs");

function isFileOrNot(dirPath) {
    return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isFile();
}

function listContent(dirPath) {
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath, toPrint) {
    let isFile = isFileOrNot(dirPath);
    if (isFile) {
        console.log(toPrint + "*");
    }
    else {
        console.log(toPrint);
        let content = listContent(dirPath);
        // console.log(content);
        for (let i = 0; i < content.length; i++) {
            let childPath = dirPath + "\\" + content[i];
            viewFlat(childPath, toPrint + "\\" + content[i]);
        }

    }
}

let input = process.argv.slice(2);
let strArr = input[0].split("/");
// strArr.pop();
let toPrint = strArr.pop();
console.log("toPrint "+toPrint);
// viewFlat(input[0], toPrint);