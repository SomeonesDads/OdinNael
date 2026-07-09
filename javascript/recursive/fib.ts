function startfib(n: number): number[] {
    return fib(n, [])
}
function fib(n: number, seq: number[]){
    if(seq.length === 0) seq.push(0);
    else if(seq.length === 1) seq.push(1);
    else seq.push(seq[seq.length-1] + seq[seq.length-2]);

    if(n <= 0) return seq;
    else return fib(n-1, seq);
}

console.log(startfib(0));
console.log(startfib(1));
console.log(startfib(8));