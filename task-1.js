function calculateMoney(ticket)
{
    if (ticket >= 0){
        console.log(ticket*120-(500+(8*50)))
    }
    else{
        console.log("Please enter a valid ticket number.")
    }
}
calculateMoney(1055)
calculateMoney(-1055)