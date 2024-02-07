function deleteInvalids(array){
    let numbers=[];
    if(Array.isArray(array))
    {
        for(let i=0;i<array.length;i++)
        {
            if(typeof array[i] === "number")
            {
                numbers.push(array[i]);
            }
        }
        return numbers;
    }else{
        return "This input is not Array"
    }
}

array_of_numbers=deleteInvalids([20,"Ridoy","12",true,30,86])
console.log(array_of_numbers)

array_of_numbers2=deleteInvalids(20)
console.log(array_of_numbers2)