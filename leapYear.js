function isLeapYear(year)
{
    if(((year%4==0)&& (year%100!=0)) || (year%400==0))
    {
        return true;
      
    }
    else{
        return false;
        
    }
   
}


const checkYear= isLeapYear(2000);
if(checkYear== true)
{
    console.log("Leap Year");
}
else{
    console.log("Not a Leap Year");
}
