let game = {

    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function(id){

        let card = this.cards.filter(card=>card.id===id)[0]

        if(card.flipped || this.lockMode) {
            return false
        }
        if(!this.firstCard){
            this.firstCard = card
            this.firstCard.flipped = true
            return true
        }else{
            this.secondCard = card
            this.secondCard.flipped = true
            this.lockMode= true
            return true
        }
    },
    checkMatch: function(){

        if(!this.firstCard || !this.secondCard){
        return false
    }
        
            return this.firstCard.icon === this.secondCard.icon
            
    },

    clearCards: function(){
        this.firstCard = null
        this.secondCard = null
        this.lockMode = false
    },
    unflipCards(){
        this.firstCard.flipped = false
        this.secondCard.flipped = false
        this.clearCards()
    },
    
    checkGameOver () {

       return this.cards.filter(card=>!card.flipped).length == 0 

    },

techs : 
['bootstrap',
'css',
'electron',
'firebase',
'html',
'javascript',
'jquery',
'mongo',
'node',
'react'],

cards : null,

    createCardsFromTechs: function () {

    this.cards = []
    
     // declaramos o array cards vazio, q irá receber as cartas do jogo

    this.techs.forEach((tech) => {
        this.cards.push(this.createPairFromTech(tech))

    //O forEach irá repetir a funcão "createPairFromTech 10 vezes, criando 10 pares"

    })
    this.cards = this.cards.flatMap(pair => pair)
    //O flatMap separará os pares do array
    this.shuffleCards()
    return this.cards
    },

    createPairFromTech: function (tech){
        return [{

            /*Essa funcão irá criar as cartas, cada item do array receberá as seguintes informações 
            id, icon (referente ao nome da imagem) e flipped q irá dizer se a carta está virada, ou não*/

            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
            },
            {id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false}]
    },

    createIdWithTech : function (tech){
        return tech + parseInt(Math.random() *1000)

        /*O comando Math.random irá gerar um número aleatório, ele será o id de cada carta, 
        diferenciando as cartas pares uma das outras*/

    },

     shuffleCards :function(cards){
  
        /*Essa função tem o objetivo de embaralhar o array "cards", consequentemente embaralhando
        as cartas do tabuleiros*/

        let currentIndex = this.cards.length /*currentIndex irá receber o "lenght" de cards, número referente a quantidade de techs existentes no array*/
        let randomIndex = 0

        while(currentIndex !== 0) {
            /*enquanto esse index for diferente de 0, um número randomIndex receberá um número aleatório
            entre 0 e 20*/
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
            /*metóro de embaralhamento*/
        }
    }
}
