import fs from "fs/promises"
import fsn from "fs"
import path from "path"
//console.log(fs)
let files= await fs.readdir("D:\\javascript\\fileProject")
console.log(files)
let extensation=[]
for (const item of files) {
    let ext=item.split(".")[item.split(".").length-1] // last index of the array
    console.log(ext)
    if(fsn.existsSync(ext)){
        fs.rename(item.toString(), path.join(ext, path))
    }
    else{
        fs.mkdir(ext)
    }
    console.log(item)
}