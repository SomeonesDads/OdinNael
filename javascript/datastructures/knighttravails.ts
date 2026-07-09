
class coord{
    constructor(
        public x: number,
        public y: number
    ){}

    move(step: number[]){
        
        let x = this.x + step[0];
        let y = this.y + step[1];
        if(x < 1 || x > 8 || y < 1 || y > 8){return cerror}
        return new coord(x,y);
    }

    toString(){
        return `[${this.x}, ${this.y}]`
    }
}

const KNIGHT_MOVES = [
    [1, 2],  [2, 1],   // Up-Right 
    [2, -1], [1, -2],  // Down-Right 
    [-1, -2],[-2, -1], // Down-Left 
    [-2, 1], [-1, 2]   // Up-Left 
] as number[][];

const cerror = new coord(-1,-1);


function knightMoves(start: coord, end: coord){
    // We'll do BFS instead of DFS because it'll net the shortest path. I ain't doin djikstra for ts.

    let queue: coord[] = [];
    let visited: coord[][] = [];
    
    function hasVisited(check: coord){
        for(let visits of visited){
            if((check.x === visits[0].x && check.y === visits[0].y) || (check.x === visits[1].x && check.y === visits[1].y)) return true;
        }
        return false;
    }

    visited.push([start, cerror]);
    let cur = start;
    while(cur.x !== end.x || cur.y !== end.y){
        for(let moves of KNIGHT_MOVES){
            const target = cur.move(moves);
            if(target !== cerror){
               queue.push(target);
            }
        }
        while(queue.length && hasVisited(queue[0])) queue.shift();
        visited.push([cur, queue[0]]);        
        cur = queue[0];
        queue.shift();
    }

    let log = []
    function findParent(check: coord) : coord {
        for(let visits of visited){
            if(check.x === visits[1].x && check.y === visits[1].y) return visits[0];
        }
        return cerror; //unreachable
    }

    while(end.x !== start.x || end.y !== start.y){
        log.push(end.toString()); 
        end = findParent(end);
    }
    log.push(start);
    log.reverse();
    log.pop();
    let finalstring = ""
    for(let history of log){
        finalstring += (`${history.toString()} -> `);
    }
    finalstring += cur.toString();
    console.log(finalstring);
}