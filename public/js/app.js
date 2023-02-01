const $num_advice = document.getElementById("num_advice")
const $advice_content= document.getElementById("advice_content")

const $icon_dice = document.querySelector(".icon_dice")

const urlAdvice = "https://api.adviceslip.com/advice"

async function getAdvice(){

    const response = await fetch(urlAdvice)
    const data = await response.json()

    $num_advice.textContent=data.slip.id
    $advice_content.textContent=data.slip.advice

    console.log(data.slip.advice)
}

$icon_dice.addEventListener("click",getAdvice);
