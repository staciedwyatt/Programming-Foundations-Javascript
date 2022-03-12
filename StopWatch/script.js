//sieve of eratoshenes. 

//limit is the upper limit for primalty testing
//function sieveOfEratosthenes(limit) {
  //var sieve = [];
  //var primes = [];
  //var k;
  //var l;
  //sieve[1] = false;
  // iterate over numbers x from 2 to square root of max
  //for (k = 2; k <= limit; k++) {
    //sieve[k] = true;
  //}
  // display the primes less than max
  //for (k = 2; k * k <= limit; k++) {
    // 2 is the smallest prime
    //if (sieve[k] !== true) {
      // only use if primes
     // continue;
    //}
    // mark off all multiples of current number x as non-prime
    //for (l = k * k; l <= limit; l += k) {
     // sieve[l] = false;
   // }
  //}
  //sieve.forEach(function (value, key) {
    //if (value) {
     // this.push(key);
    //}
  //}, primes);
  //return primes;
//}

//Euclidean Algorithm 

// EuclideanAlgorithm
function EuclideanAlgorithmNon(a = 0, b = 0) {
    while (a != 0 && b != 0) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    if (a == 0) {
      return b;
    } else {
      return a;
    }
  }

  //bubble sort 

  / BubbleSort
var numbers = [45, 72, 38, 62, 33, 87, 99, 11, 31, 15];

function bubbleSort(numbers) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        var temp = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(numbers);
console.log(numbers);