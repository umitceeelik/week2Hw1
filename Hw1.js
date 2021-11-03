console.log("**********First Part*************")
 function findPrime(...numbers) {

    numbers.forEach(number => {

         if (number<0) {
            console.log(number + " Negative numbers can not be prime numbers")
        }
        else {
            if (isPrime(number)) {               
                console.log(number + " is a prime number")
            }
            else{
                console.log(number + " is not a prime number")
            }
        }       
    })
}

function isPrime(number) {
    let counter = 0
    for (let i =1; i<=number;  i++) {
        if (number%i == 0) {
            counter++;
        }
    }
    if (number == 1 || number == 0) {
        return false
    }
    if (counter>2) {
        return false
    }
    else{
        return true
    }
}


// Testing findPrime method
findPrime(1,2,5,8,21, 13)
findPrime(3,5)

console.log("**********Second Part*************")

function isFriendNumbers(no1,no2) {       
    if (totalOfDivisorsWithoutGivenNumber(no1) == no2 && totalOfDivisorsWithoutGivenNumber(no2) == no1) {
        console.log(no1 + " and " + no2 + " are friends numbers.")
    }
    else{
        console.log(no1 + " and " + no2 + " are not friends numbers.") 
    }
}

// Girilen sayının kendisi hariç pozitif bölenlerini toplar
function totalOfDivisorsWithoutGivenNumber(number) {
    let total = 0
    for (let i =1; i<number;  i++) {
       
        if (number%i == 0) {
            total = total+i
        }
    }
    return total    
}
//Testing isFriendNumbers method 
isFriendNumbers(220,284)
isFriendNumbers(1184,1200)

console.log("**********Third Part*************")

// finds the perfect numbers up to given number
function findPerfectNumber(number) {
    let perfectNumbers = []
    for (let i = 1;  i<=number ; i++) {

        if (totalOfDivisorsWithoutGivenNumber(i) == i) {
            perfectNumbers.push(i)
        }       
    }
        console.log(perfectNumbers)

}
//Testing findPerfectNumber
findPerfectNumber(1000)

console.log("**********Fourth Part*************")
// finds the prime numbers up to given number
function listOfPrimeNumbers(number) {
    let primeNumbers = []
    for (let i = 0; i <= number; i++) {
        if(isPrime(i)){
             primeNumbers.push(i)
        }           
    }
    console.log(primeNumbers)
}
// Testing listOfPrimeNumbers method
listOfPrimeNumbers(1000)
