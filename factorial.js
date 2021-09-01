// function factorial(number)
// {
//     var fact = 1;
//     for(var i=1; i<=number;i++)
//     {
//         fact = fact * i;
//     }
//     return fact;
// }

var result = factorial(5);
console.log(result);

function factorial(num)
{
    var fact = 1;
    var i = 1;
    while(i<=num)
    {
        fact = fact * i;
        i++;
    }
    return fact;
}