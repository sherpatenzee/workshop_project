"use strict";

window.onload = init;

function init() 
{
   const calcBtn = document.getElementById("calc");
   calcBtn.onclick = oncalcBtnClicked;
   
}

function oncalcBtnClicked()
{
  const num1 = document.getElementById("monthly");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("rate");
  let number2 = Number(num2.value);
  const num3 = document.getElementById("year");
  let number3 = Number(num3.value);
  const messagePara = document.getElementById("messagePara");


  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }


    let rate = number2 / 100;
    let n = number3 * 12; 
    let i = rate /12; 
    let annuity = number1 * ((1/i) - (1/(i*Math.pow(1+i, n))));
    

  

  
  const answer = document.getElementById("presentValue");
 
  answer.value = annuity.toFixed(2);
  
  messagePara.innerHTML = "";
}


