function isEmail(txt){
    txt = txt.trim();
    let a = txt.indexOf("@")+1;
    console.log(a);
    Boolean(a);
    if(Boolean(a) == true) {
            return true;
    }
    else if(a == false){
            return false;
        }
}