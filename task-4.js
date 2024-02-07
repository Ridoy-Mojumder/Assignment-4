function password(pass)
{
    let string='';
    for(let val of Object.values(pass))
    {
        string+=val;
    }
    return string;
}
let a=password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' })
console.log(a);