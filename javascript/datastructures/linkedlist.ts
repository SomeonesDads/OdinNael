class ListNode<T> {
    value: T;
    next: ListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedList<T> {
    headlist: ListNode<T> | null = null;
    taillist: ListNode<T> | null = null;
    sizelist: number = 0;

    size(){return this.sizelist}
    head(){return (this.headlist? this.headlist.value : undefined)}
    tail(){return (this.taillist? this.taillist.value : undefined)}

    at(n: number){ // 0-based
        if (n < 0 || n >= this.size()) return undefined;
        let curnode: ListNode<T> | null = this.headlist;
        while(n > 0){
            curnode = curnode!.next;
            n--;
        }
        return curnode?.value;
    }

    pop(){
        if(this.sizelist === 0) return undefined;
        const node = this.headlist;
        this.headlist = node!.next;
        this.sizelist--;

        if (this.headlist === null) {
            this.taillist = null;
        }

        return node!.value;
    }

    contains(value: T){
        let curnode = this.headlist;
        while(curnode !== null){
            if(curnode.value === value) return true;
            curnode = curnode.next;
        }
        return false;
    }

    findIndex(value: T){
        let curnode = this.headlist;
        let index = 0;
        while(curnode !== null){
            if(curnode.value === value) return index;
            index++;
            curnode = curnode.next;
        }
        return -1;
    }

    toString(){
        let ans: string = "";
        let curnode = this.headlist;
        while(curnode !== null){
            ans += `( ${curnode.value} ) -> `;
            curnode = curnode.next;
        }
        ans += "null";
        return ans;
    }

    append(value: T) {
        const node = new ListNode(value);
        if (!this.headlist) {
            this.headlist = this.taillist = node;
            this.sizelist++;
            return;
        }
        this.taillist!.next = node;
        this.taillist = node;
        this.sizelist++;
    }

    prepend(value: T) {
        const node = new ListNode(value);
        if (!this.headlist) {
            this.headlist = this.taillist = node;
            this.sizelist++;
            return;
        }
        node.next = this.headlist;
        this.headlist = node;
        this.sizelist++;
    }
}

