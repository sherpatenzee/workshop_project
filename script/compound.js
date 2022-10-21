"use strict";

window.onload = init;

function init() 
{
   const calcBtn = document.getElementById("calcBtn");
   calcBtn.onclick = oncalcBtnClicked;
   
}

function oncalcBtnClicked()
{
  const num1 = document.getElementById("deposit");
  let number1 = Number(num1.value);

  const num2 = document.getElementById("years");
  let number2 = Number(num2.value);

  const num3 = document.getElementById("rate");
  let number3 = Number(num3.value);

  const messagePara = document.getElementById("messagePara");


  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }

  let rate = number3 / 100;
  
  let interest =number1 * rate * number2 ;

   let compound = (number1 + (number1 * rate) ) * number2

  // let futureBalance = compound +  interest;
  
  
  

  const answer = document.getElementById("futureBalance");
  const answer2 = document.getElementById("interestEarned")

  answer.value = compound;
  answer2.value = interest;
  messagePara.innerHTML = "";
}


