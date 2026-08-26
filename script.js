const board = document.querySelector(".board");
const blockheight = 30
const colwidth = 30
const blocks=[];
const row = Math.floor(board.clientHeight/blockheight);
const col = Math.floor(board.clientWidth/colwidth);

// for (let index = 0; index < row * col; index++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     board.appendChild(block);
    
// }
for (let rowindex = 0; rowindex < row; rowindex++) {
    for(let colindex = 0; colindex < col; colindex++){
        const block = document.createElement("div");
        block.classList.add("block");
        board.appendChild(block);
        // block.innerText=`${rowindex}-${colindex}`;
        // blocks[`${rowindex}-${colindex}`]=block
    }
    
}

