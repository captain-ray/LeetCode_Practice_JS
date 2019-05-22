/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let i,j;
    let map={};

    //scan in rows
    for(i=0;i<9;i++){
        map={};
        for(j=0;j<9;j++){
            if(board[i][j]!='.'){
                if(board[i][j] in map){
                    return false;
                }else{
                    map[board[i][j]]=j;
                }
            }
        }
    }

    //scan in columns
    for(i=0;i<9;i++){
        map={};
        for(j=0;j<9;j++){
            if(board[j][i]!='.'){
                if(board[j][i] in map){
                    return false;
                }else{
                    map[board[j][i]]=j;
                }
            }
        }
    }

    //scan in sub-boxes
    let m,n,x,y;
    for(i=0;i<3;i++){
        for(j=0;j<3;j++){
            x=i*3;
            y=j*3;

            map={};
            for(m=x;m<x+3;m++){
                for(n=y;n<y+3;n++){
                    if(board[m][n]!='.'){
                        if(board[m][n] in map){
                            return false;
                        }else{
                            map[board[m][n]]=n;
                        }
                    }
                }
            }


        }
    }


    return true;


};


//test
let board=[
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];

let board2=[
    ["8","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]

  console.log(isValidSudoku(board));
  console.log(isValidSudoku(board2));