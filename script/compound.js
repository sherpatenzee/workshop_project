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

  //A = P(1 + \frac{r}{n})^{nt}

  let rate = number3 / 100;
  
  

  let compound = number1 * Math.pow((1 + rate / 365),365 * number2);

  let interest = compound - number1 ;
  
  

  const answer = document.getElementById("futureBalance");
  const answer2 = document.getElementById("interestEarned")

  answer.value = compound.toFixed(2);
  answer2.value = interest.toFixed(2);
  messagePara.innerHTML = "";
}


