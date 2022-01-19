function countPrimeNumbers() {
    function isPrime(num) {
        let prime = true;
        for (let x = 2; x < num; x++) {
            if (num % x == 0) {
                prime = false;
                break;
            }
        }
        return prime
    }

    let cont = 0;
    for (i = 2; i <= 100; i++) {
        if (isPrime(i) == true) {
            cont++;
        }
    }
    console.log(cont);
}
for (y = 0; y < 100; y++) {
    countPrimeNumbers();
}


const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (t1 - t0) + ' milliseconds.');
