const STR = "ababcdfjkolm"
const RemoveDup = (x) => {
    let d = {};
    p = x.split('')
    rs = ""
    p.forEach(e => {
        if(d.hasOwnProperty(e)){
            console.log("Duplicates--->>>",e)
        }
        else{
            d[e] = 1;
            rs += e;
        }
    }
    );
    return rs
}
console.log(RemoveDup(STR))