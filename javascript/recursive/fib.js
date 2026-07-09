"use strict";
function fib(n, seq) {
    if (seq.length === 0)
        seq.concat(0);
    if (seq.length === 1)
        seq.concat(1);
    else
        seq.concat(seq[seq.length - 1] + seq[seq.length - 2]);
    if (n <= 0)
        return seq;
    else
        return fib(n - 1, seq);
}
