var fibo = [0, 1];
function fibonacci(n){
    for(var i = 2; i <= n; i++)
    {
        fibo[i] = fibo[i-1] + fibo[i-2];
    
    }
    return fibo;
}

console.log(fibonacci(5));