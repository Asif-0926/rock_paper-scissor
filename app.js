const choices =document.querySelectorAll(".choice")
const msg=document.getElementById("msg")
const userSc=document.querySelector("#user-score")
const compSc=document.querySelector("#comp-score")
const comp_choice=document.getElementById("comp_choice")


let userScore=0
let compScore=0

const genCompchoice=()=>{
    const options=["rock","paper","scissor"]
    const index=Math.floor(Math.random()*3)
    return options[index]
}

const draw=()=>{
    msg.innerText="match Draw play again !"
    msg.style.backgroundColor="aquamarine"
}

const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin===true){
        msg.innerText=`you win :) ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
        userScore++
        userSc.innerText=userScore
    }
    else{
        msg.innerText=`you lose :( ${compChoice} beats ${userchoice}`
        msg.style.backgroundColor="red"
        compScore++
        compSc.innerText=compScore
       
    }
}

const playGame=(userchoice)=>{
    console.log("user choice is",userchoice)
    const compChoice=genCompchoice()
    console.log("computer choice is ",compChoice)
    showcomp_choice(compChoice)
    if (userchoice === compChoice){
       draw()
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compChoice==="paper"?false:true
        }
        else if(userchoice=="paper"){
            userwin= compChoice==="scissor"?false:true
        }
        else{
            userwin= compChoice==="rock"?false:true
        }
        showWinner(userwin,userchoice,compChoice);
    }
}

choices.forEach((choice) => {
choice.addEventListener("click",()=>{
    const userchoice =choice.getAttribute("id")
    playGame(userchoice)

})
})
const showcomp_choice=(compChoice)=>{
    comp_choice.innerText=compChoice
    comp_choice.style.color="blue"
}
