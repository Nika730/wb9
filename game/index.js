const divUserName = document.querySelector('.user-name')
const divGameCount = document.querySelector('.game-count')
const divGame = document.querySelector('.game')

const inputName = document.getElementById('name')
const btnToCount = document.getElementById('to-count')
const inputCount = document.getElementById('count')
const btnToGame = document.getElementById('to-game')

const rockPic = document.getElementById('rock')
const scissorsPic = document.getElementById('scissors')
const peperPic = document.getElementById('peper')
btnToCount.setAttribute.disable=('disable', true)
divGameCount.style.display = 'none'
divGame.style.display = 'none'

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