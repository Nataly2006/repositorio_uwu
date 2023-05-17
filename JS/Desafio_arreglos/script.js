//Crear una funcion que cada vez que se nos presente el valor comida
// imprimira "delicioso".si comida no esta presente se imprimira 
//"Yo tengo hambre"

function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("I'm hungry")
    }
} 
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;

    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0

    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    var left = 0;
    var right = arr.length - 1;
    while(left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    // your code here
    return arr;
}
    
var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// Escriba una función que devuelva una matriz de números de Fibonacci hasta una longitud dada n.
// Los números de Fibonacci se calculan sumando los dos últimos valores de la secuencia.
// Entonces, si el cuarto valor es 2 y el quinto valor es 3, entonces el siguiente valor en la secuencia es 5.

function fibonacciArray(n) {
    //el [0, 1] son ​​los valores iniciales de la matriz para calcular el resto a partir de
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
    
var result = fibonacciArray(10);
console.log(result); // imprimira de vuela  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]