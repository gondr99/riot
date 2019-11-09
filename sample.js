let obj = {"name":"최선한", "job":"교사", "nickname":"gondr"};

let list = Object.keys(obj);

for(let i = 0; i < list.length; i++){
    console.log(obj[list[i]]);
}