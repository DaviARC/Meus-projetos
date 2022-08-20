    document.addEventListener('DOMContentLoaded', () => {
     /*Quando tudo estiver carregado, a função será executada*/   
    let squares = document.querySelectorAll(".square")
        
    squares.forEach((squares) => {
        squares.addEventListener('click', handleClick)
    })
})
    /*O código "forEach" irá aplicar uma function a cada elemento de um de um array, 
    o addEventListener, irá adicionar uma evento e função q ocorrerá após o evento,
    no caso a function*/

    function handleClick (event) {

    let square = event.target
    /* Selecionará a div q foi clicada*/
    let position = square.id
    /* Selecionará o id da dive que foi clicada*/
    if (handleMovie(position)){
        
        /* Se HandleMovie (gameover) for verdadeiro, o alert aparecerá na tela*/

        setTimeout(() =>{
            if (PlayerTime == 0) {
                PlayerTime = "ESCUDO"
            } 
            else {
                PlayerTime = "ESPADA"
            }

        alert ("O jogo acabou, o vencedor foi o jogador " + PlayerTime)
    },100)
    }

    /* Se HandleMovie (gameover) for falso, a function updateSquare será executada*/
    updateSquare(position)
}   
    function updateSquare(position){
        let square = document.getElementById(position.toString())
        let symbol = board[position]
        square.innerHTML = `<div class='${symbol}'> </div> `
}

    function updateSquares (){
        let squares = document.querySelectorAll(".square")
    
        squares.forEach((square) => {
            let position = square.id
            let symbol = board[position]

            if (symbol != 'x,', 'o') {
                square.innerHTML = `` 
            }
        })
    }
