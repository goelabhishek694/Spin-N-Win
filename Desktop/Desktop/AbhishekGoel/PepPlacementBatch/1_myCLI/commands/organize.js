// let fs=require("fs");
// let path=require("path");
// let input=process.argv.slice(2);
// let dirpath=input[0];
// let types=require("../util.js");

// /* creating of directories
// organizedfile
//     1. media
//     2. archives
//     3. documents
//     4. app
//     5. others
// */
// function createDir(src){
//     if(fs.existsSync(src)==false){
//         fs.mkdirSync(src);
//     }
// }

// // checks if the path url id  file or folder
// function isFilorNot(dirpath) {
//     return fs.lstatSync(dirpath).isFile();
// }

// // returns an array of files present in the directory
// function getContent(dirpath) {
//     return fs.readdirSync(dirpath);
// }

// // receives the path of a file, evaluates the extension of file and returns the name of the folder where file needs to be copied. 
// function getDir(dirpath){
//     let stringArr=dirpath.split(".");
//     let ext=stringArr.pop();  // or use path.extname
//     for(let key in types){
//         for(let j=0;j<types[key].length;j++){
//             if(types[key][j]==ext){
//                 return key;
//             }
//         }
//     }
//     return "others";
// }
// // this function is used to copy the contents of a file into  destFolder
// function copyFileToFolder(dirpath,destFolder){
//     /* 
//     basename gives us the name of the file present in path
//      eg. users/AbhishekGoe/Desktop/rich.js
//     basename will be rich.js
//      */
//     let baseName=path.basename(dirpath);
//     /*
    
//     destFile will give us the filepath where copied file needs to be pasted
//     e.g. destFolder is users/AbhishekGoe/Desktop/organize_files/others
//     now we need to create a file in others folder named rich.js (basename) where contnents of rich.js will be pasted into this rich.js
//     */
//     let destFile=path.join(destFolder,baseName);
//     fs.copyFileSync(dirpath,destFile);
// }

// function organizeDir(dirpath){
//     let isFile=isFilorNot(dirpath);
//     if(isFile){
//         // now we get the folder name where the file needs to go
//         let folderName=getDir(dirpath);
        
//         // now we get the destination where contents of dirpath file needs to be pasted
//         let destFolder=path.join(organizeFile,folderName); 
//         copyFileToFolder(dirpath,destFolder);

//     }
//     else{
//         let content=getContent(dirpath);
//         for(let i=0;i<content.length;i++){
//             let childPath=path.join(dirpath,content[i]);
//             organizeDir(childPath);
//         }
//     }
// }

// function organizeFunction(dirpath){
//     let organizeFile=path.join(dirpath,"organizedFile");
//     createDir(organizeFile);

//     for(let key in types){
//         let innerPath=path.join(organizeFile,key);
//         createDir(innerPath);
//     }

//     let otherPath=path.join(organizeFile,"others");
//     createDir(otherPath);

//     organizeDir(dirpath);



// }

// organizeFunction(dirpath);

// module.exports={
//     organizeFn:organizeFunction
// }




