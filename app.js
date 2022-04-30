const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPostion
let currentTime = 60
let timerId = null
let countDownTimerId = setInterval(countDown, 1000)

moveMole()

function randomSquare()
{
    squares.forEach(square =>
    {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPostion = randomSquare.id
}

squares.forEach(square => 
{
    square.addEventListener('mousedown', () => 
    {
        if(square.id == hitPostion)
        {
            result++;
            console.log(result)
            score.textContent = result
            hitPostion = null
        }
    }) 
})

function moveMole()
{
    timerId = setInterval(randomSquare, 500)
}

function countDown()
{
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0)
    {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}