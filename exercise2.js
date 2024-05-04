//1. Write a code to convert celsius to fahrenheit
let tempName = "Fahrenheit"
let tempC = 60

if(tempName == "Fahrenheit"){
    let tempF = ((tempC * 9) / 5) + 32
    console.log(tempC + " Celcius -> " + tempF + " Fahrenheit")
}

//2. Write a code to check whether the number is odd or even
let num1 = 2

if(num1 % 2 == 1){
    console.log(num1 + " -> odd number")
} else {
    console.log(num1 + " -> even number")
}

//3. Write a code to check whether the number is prime number or not
let num2 = 7
let isPrime = true

for(let i = 2; i < num2; i++){
    if(num2 % i == 0){
        isPrime = false
        break
    }
}

if(isPrime == true){
    console.log(num2 + " is a prime number")
} else {
    console.log(num2 + " is not a prime number")
}

//4. Write a code to find the sum of the numbers 1 to N
let sum = 0
let num3 = 5

for(let j = 1; j <= num3; j++){
    sum += j
    console.log(num3 + " -> " + sum)
}

//5. Write a code to find factorial of a number
let factorial = 1

for(k = 6; k >= 1; k--){
    factorial *= k
}
console.log("Factorial result = " + factorial)

//6. Write a code to print the first N fibonacci numbers
let num4 = 15
let n1 = 1
let n2 = 1
let nextTerm
let fibSum = 0

for(let l = 3; l <= num4; l++){
    temp = n1
    n1 = n2
    n2 = temp + n2
    console.log("fib ke => ",l," result fib --> ",n2)
}
console.log(num4 + " -> " + fibSum)