let turn: number = 1;
const winDialog = document.getElementById("win-dialog") as HTMLDialogElement;
const winMessage = document.getElementById("win-message") as HTMLHeadingElement;
const dialogResetBtn = document.getElementById("dialog-reset-btn") as HTMLButtonElement;

const board = {
    paper : Array.from({length : 3}, () => Array(3).fill("")),
    reset(){
        this.paper = Array.from({length : 3}, () => Array(3).fill(""));
    },

    endgame(winner: string) {
        if (winner === "Tie") {
            winMessage.textContent = "It's a Tie!";
        } else {
            winMessage.textContent = `Player ${winner === "O" ? "1" : "2"} (${winner}) Wins!`;
        }
        winDialog.showModal();
    },

    wincon(){
        let win: boolean = false;
        let winner: string = "";
        // vert
        if(this.paper[0][0] == this.paper[0][1] && this.paper[0][1] == this.paper[0][2] && this.paper[0][0] != "") { win = true; winner = this.paper[0][0]; }
        if(this.paper[1][0] == this.paper[1][1] && this.paper[1][1] == this.paper[1][2] && this.paper[1][0] != "") { win = true; winner = this.paper[1][0]; }
        if(this.paper[2][0] == this.paper[2][1] && this.paper[2][1] == this.paper[2][2] && this.paper[2][0] != "") { win = true; winner = this.paper[2][0]; }
        // horiz
        if(this.paper[0][0] == this.paper[1][0] && this.paper[1][0] == this.paper[2][0] && this.paper[0][0] != "") { win = true; winner = this.paper[0][0]; }
        if(this.paper[0][1] == this.paper[1][1] && this.paper[1][1] == this.paper[2][1] && this.paper[0][1] != "") { win = true; winner = this.paper[0][1]; }
        if(this.paper[0][2] == this.paper[1][2] && this.paper[1][2] == this.paper[2][2] && this.paper[0][2] != "") { win = true; winner = this.paper[0][2]; }
        // diag
        if(this.paper[0][0] == this.paper[1][1] && this.paper[1][1] == this.paper[2][2] && this.paper[0][0] != "") { win = true; winner = this.paper[0][0]; }
        if(this.paper[0][2] == this.paper[1][1] && this.paper[1][1] == this.paper[2][0] && this.paper[0][2] != "") { win = true; winner = this.paper[0][2]; }

        if (win) {
            this.endgame(winner);
            return;
        }
        const isTie = this.paper.every(row => row.every(cell => cell !== ""));
        if (isTie) {
            this.endgame("Tie");
        }
    },

    mark(x: number,y: number, type: string) {
        this.paper[x][y] = type;
        renderboard();
        this.wincon();
    }, 
}

function renderboard(): void {
    const boardhtml = document.getElementById("board") as HTMLDivElement;
    boardhtml.innerHTML = "";
    board.paper.forEach((row, ridx) => {
        row.forEach((ans, cidx) => {
            const box = document.createElement("div");
            box.classList.add("box");
            box.textContent = ans;
            box.addEventListener("click", e => {
                if(ans !== "") return;
                if(turn == 1) ans = "O";
                else ans = "X";
                turn*=-1;
                board.mark(ridx, cidx, ans);
                updateTurnVisuals(); 
            })
            boardhtml.appendChild(box);
        });
    });
}

function updateTurnVisuals(): void {
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    if (!p1 || !p2) return;

    if (turn === 1) {
        p1.classList.add("active-turn");
        p1.classList.remove("inactive-turn");
        
        p2.classList.add("inactive-turn");
        p2.classList.remove("active-turn");
    } else {
        p2.classList.add("active-turn");
        p2.classList.remove("inactive-turn");
        
        p1.classList.add("inactive-turn");
        p1.classList.remove("active-turn");
    }
}

function resetm(){
    board.reset();
    turn = 1;
    updateTurnVisuals(); 
    renderboard();
}

const resetbtn = document.getElementById("reset");

resetbtn?.addEventListener("click", e => {
    resetm();
})

dialogResetBtn.addEventListener("click", () => {
    resetm();
    winDialog.close(); 
});

renderboard();
updateTurnVisuals(); 