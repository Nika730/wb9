const divUserName = document.querySelector('.user-name')
const divGameCount = document.querySelector('.game-count')
const divGame = document.querySelector('.game')

const inputName = document.getElementById('name')
const btnToCount = document.getElementById('to-count')
const inputCount = document.getElementById('count')
const btnToGame = document.getElementById('to-game')

const rockPic = document.getElementById('rock')
const scissorsPic = document.getElementById('scissors')
const paperPic = document.getElementById('paper')
btnToCount.setAttribute.disable=('disable', true)
divGameCount.style.display = 'none'
divGame.style.display = 'none'

const divMiddleResult = document.querySelector('.middle-result')
const spanMiddleResult  = document.querySelector('#middle-result')

const divResult = document.querySelector('.result')
const spanResult = document.querySelector('#result')

const gamesAll = document.getElementById('game-all')
const userWin = document.getElementById('user-win')
const pcWin = document.getElementById('pc-win')

divResult.style.display = 'none'
spanResult.style.display = 'none'

let gamesCount = 1

const showCount = () => {
    divUserName.style.display = 'none'
    divGameCount.style.display= 'block'
    inputName.removeEventListener('input', disableName)
}

const disableName= () => {
    console.log(inputName.value.length);
    if (inputName.value.length<2){
        btnToCount.setAttribute('disabled', true)
    } else {
    btnToCount.removeAttribute('disabled')
    }
}

btnToCount.onclick = () => {
    showCount()
}

inputName.addEventListener('input',disableName )

btnToGame.onclick = () => {
    gamesCount = inputCount.value// inputName.removeEventListener('input', disableName)
    divGameCount.style.display = 'none'
    divGame.style.display= 'block'
    
}

let countGames = 0
let pcCounterWin = 0
let userCounterWin = 0
const gameCounter = (winner,user,pc) => {
    switch (winner) {
        case 'user':
            userCounterWin++
            break;
        case 'pc':
            pcCounterWin++
            break;
       
    }
    countGames++
     gamesAll.innerHTML= countGames
     userWin.innerHTML = userCounterWin
     pcWin.innerHTML = pcCounterWin 
     spanMiddleResult.innerHTML= `ПК выбрал ${pc}, Вы выбрали ${user}`
     divMiddleResult.style.display= 'block'




     setTimeout(() => {
        divMiddleResult.style.display= 'none'
     }, 2000)

     if (countGames === +gamesCount) {
        if (userCounterWin > pcCounterWin){
            spanMiddleResult.innerHTML= `Вы победили`
        } else if (userCounterWin < pcCounterWin) {
            spanMiddleResult.innerHTML= `Вы проиграли`
        } else {
            spanMiddleResult.innerHTML= `Ничья`
        }
        divResult.style.display = 'block'
        rockPic.style.display = 'none'
        scissorsPic.style.display = 'none'
        paperPic.style.display = 'none'
     }

}

const PC_CHOOSE = ['stone', 'scissors', 'paper']

rockPic.onclick = () => {
    const user = 'stone'
    const pc =  PC_CHOOSE[Math.floor(Math.random()*3)]
    switch (pc) {
        case 'stone':
            gameCounter(null, user , pc)
            break;
        case 'scissors':
            gameCounter('user', user , pc)
            break;
        case 'paper':
            gameCounter('pc', user , pc)
            break;
     
        
    }
}
scissorsPic.onclick = () => {
    const user = 'scissors'
    const pc =  PC_CHOOSE[Math.floor(Math.random()*3)]
    switch (pc) {
        case 'stone':
            gameCounter('pc', user , pc)
            break;
        case 'scissors':
            gameCounter(null, user , pc)
            break;
        case 'paper':
            gameCounter('user', user , pc)
            break;
     
        
    }
}
paperPic.onclick = () => {
    const user = 'paper'
    const pc =  PC_CHOOSE[Math.floor(Math.random()*3)]
    switch (pc) {
        case 'stone':
            gameCounter('user', user , pc)
            break;
        case 'scissors':
            gameCounter('pc', user , pc)
            break;
        case 'paper':
            gameCounter(null, user , pc)
            break;
     
        
    }
}