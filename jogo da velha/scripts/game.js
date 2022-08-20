let board = ['','','','','','','','','']
let PlayerTime = 0
let symbols = ['o', 'x']
let espada = ""
let escudo = ""

let gameOver = false

let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]   

function handleMovie(position){

    if (gameOver){
        return
    }

    if (board[position] == ''){
        board[position] = symbols[PlayerTime]
    /*Se o determinado board não conter nada, então receberá o simbolo relacionado a vez do jogador
    X ou O*/

            gameOver = isWin()

            if (gameOver == false){
                PlayerTime = (PlayerTime == 0)?1:0;
                /*O playerTime revesará entre 0 e 1, apartir do 0*/
        }
    }
    return gameOver
}

function isWin() {

   /* IRÁ REPETIR 8 VEZES, REFERENTE A QUANTIDADE DE COMBINAÇÕES POSSÍVEIS */ 

    for(let i=0; i < winStates.length; i++) {

        let seq = winStates[i]


    /* A váriavel "seq" irá receber as combinações, de uma em uma em forma de array*/

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

    /* As váriaveis pos1, pos2 e pos3 vão receber os números do array */

        if(board[pos1] == board[pos2] && 
           board[pos1] == board[pos3] &&
           board[pos1] != '') {

    /* As váriaveis "pos" vão ser utilizadas como índice para o array [board]  quer irá
    comparar se possuem o mesmo conteúdo, por exemplo. board[0] = x, board[1] = x, board[2] = x*/       

            return true

    /* Caso a combinação se efetue, então retornará verdadeiro*/

        }   
    }
        return false
    /* Se não, retornará falso*/
}

    let pA = document.getElementsByClassName("btn")


    function h2Click(callback){
        return board = ['','','','','','','','',''],
        PlayerTime = 0,
        gameOver = false
        
    }
   

