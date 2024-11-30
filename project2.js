let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const Compscorepara = document.querySelector("#comp-score");
let reset = document.querySelector("#reset-btn");

const getcompchoice = () =>{
    const option = ["rock","paper","sicssor"];
    const idx = Math.floor(Math.random()*3);
    return option[idx];
}
const draw = () =>
{
    msg.innerText = `The match is Draw`;
    msg.style.background = "black";
    msg.style.color = "yellow";
    console.log("The game was Draw");
}

const showwinner = (iswin,userchoice,compchoice) => {
    if(iswin)
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.style.background = "blue";
        msg.style.color = "yellow";
        msg.innerText = `You Win, Your ${userchoice} beats ${compchoice}`;
        console.log("You Win!!!");
    }
    else{
        compscore++;
        Compscorepara.innerText = compscore;
        msg.style.background = "red";
        msg.style.color = "yellow";
        msg.innerText = `You Lose, ${compchoice} beats your ${userchoice}`;
        console.log("You Lose!!!");
    }
}

const playgame = (userchoice) =>{
    console.log("user choice is : ", userchoice); 
    const compchoice = getcompchoice();
    console.log("computer choice is : ", compchoice)
    if(userchoice===compchoice)
    {
        draw();
        
    }
    else{
        let iswin = true;
        if(userchoice === "rock")
        {
            iswin = compchoice === "paper" ? false : true;
        }
        else if(userchoice ===  "paper")
            {
                iswin = compchoice === "scissor" ? false : true;
            }
            else{
                iswin = compchoice === "rock" ? false : true;
            }
            showwinner(iswin,userchoice,compchoice);
            
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log("choice clicked")
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
const restart = () => {
    userscore = 0;
    compscore = 0;
    userscorepara.innerText = userscore;
    Compscorepara.innerText = compscore;
    msg.style.background = "chartreuse";
    msg.style.color = "indigo";
    msg.innerText = `Play Your Move`;
}
reset.addEventListener("click",restart);