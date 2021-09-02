var number = [2, 3, 1, 2, 3, 5, 6, 6, 5, 7, 2, 1];
var uniqueNumber = [];

for(var i = 0; i < number.length; i++)
{
    var element = number[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1)
    {
        uniqueNumber.push(element);
    }
}

console.log(uniqueNumber);