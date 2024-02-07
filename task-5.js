function monthlySavings(arr,livingCost){
    if(Array.isArray(arr) && typeof livingCost==='number')
    {
        let total_income=0;
        let tax=0;
        for(let i=0;i<arr.length;i++){
            total_income+=arr[i]

            if(arr[i]>=3000)
            {
                tax+=arr[i]*0.2;
            }
        }


        const total_cost=tax+livingCost;
        const savings=total_income-total_cost;
        if(savings<=0)
        {
            return "Earn more."
        }
        else{
            return savings;
        }
    }else{
        console.log('invalid input')
    }

}
console.log(monthlySavings([1000,2000,2500] , 5000))
