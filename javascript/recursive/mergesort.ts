function mergeSort(seq: number[]): number[] {
    if (seq.length <= 1) {
        return seq;
    }
    const mid = Math.floor(seq.length / 2);

    const left = mergeSort(seq.slice(0, mid));
    const right = mergeSort(seq.slice(mid));

    return merge(left, right);
}

function merge(seqa: number[], seqb: number[]): number[]{
    var a = 0;
    var b = 0;
    var ans = [];
    while(a < seqa.length && b < seqb.length){
        if (seqa[a] < seqb[b]){ ans.push(seqa[a]); a++;}
        else if (seqb[b] < seqa[a]){ ans.push(seqb[b]); b++;}
    }
    while(a < seqa.length){ans.push(seqa[a]); a++;}
    while(b < seqb.length){ans.push(seqb[b]); b++;}
    return ans;
}

console.log(mergeSort([3,1,2,5,10,100,9,99]));
