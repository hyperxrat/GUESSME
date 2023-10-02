const inputvalue = document.getElementById('guessval')
const boxvalue = document.querySelector('.box');
const checkbtn = document.querySelector('.checkbtn');
const chanceleft = document.querySelector('.leftchance');
const score = document.querySelector('.score');
const resetbtn = document.querySelector('.resetbtn')
const think = document.querySelector('.thinker');
const container = document.querySelector('.container');
const guessbox = document.querySelector('.guessbox')

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(`Starting Answer ${secretNumber}`)

function random(){
    secretNumber = Math.floor(Math.random() * 20 + 1);
    inputvalue.value = "";
    boxvalue.textContent = "?";
    console.log(`New Answer ${secretNumber}`)
}

checkbtn.addEventListener("click", function guesscalc(){
   
    if(inputvalue.value == secretNumber){
        boxvalue.textContent = secretNumber
        document.querySelector('.thinker').textContent = "🎉CORRECT";
        document.querySelector('.head').textContent = "🎉YOU WON";
        document.body.style.backgroundColor = "limegreen";
        container.style.backgroundColor="limegreen"
        document.querySelector('.highscore').textContent = score.innerHTML;

    }
    else if(!inputvalue.value){
        console.log('NO INPUT');
    }
    else if(Number(chanceleft.textContent) === 0){
        document.querySelector('.head').textContent = "GAME OVER";
        container.style.display="none";
        guessbox.style.display="none";
        alert("Click on Again to Play")
        
    }
    else if(inputvalue.value > secretNumber){
        document.querySelector('.thinker').textContent = "📈Too High";
        chanceleft.textContent = chanceleft.textContent - 1;
        random();
        console.log(`chance left ${chanceleft.textContent}`);
        score.innerHTML = score.innerHTML - 1;

    }
    else if(inputvalue.value < secretNumber){
        document.querySelector('.thinker').textContent = "📉Too Low";
        chanceleft.textContent = chanceleft.textContent - 1;
        random();
        console.log(`chance left ${chanceleft.textContent}`);
        score.innerHTML = score.innerHTML - 1;
    }
})

resetbtn.addEventListener("click",()=>{
    document.body.style.backgroundColor="rgb(47,47,47)";
    container.style.backgroundColor="rgb(47,47,47)"
    inputvalue.value = "";
    boxvalue.textContent = "?";
    think.textContent = "Start Guessing....";
    score.textContent = "20";
    chanceleft.textContent = "10";
    container.style.display="";
    guessbox.style.display="";
    random();
    document.querySelector('.head').textContent = "GUESS MY NUMBER";
    document.querySelector('.highscore').textContent = "0";
})

