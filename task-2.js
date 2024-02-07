function checkName(name){
    if(typeof  name=="string")
    {
        if(name.slice(-1)==='a'||name.slice(-1)==='y'||name.slice(-1)==='i'||name.slice(-1)==='e'||name.slice(-1)==='o'){
            return "Good Name."
        }else{
            return "Bad Name."
        }
    }
    else{
        return "invalid."
    }
    
}
console.log(checkName("Ridoy"))
console.log(checkName("Ridoyr"))
console.log(checkName(1234))