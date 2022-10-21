"use strict";

window.onload = init;

function init() 
{
   const calcBtn = document.getElementById("calcBtn");
   calcBtn.onclick = onAddBtnClicked;
   
}

function onAddBtnClicked()
{
  const num1 = document.getElementById("loanAmount");
  let number1 = Number(num1.value);
  const num2 = document.getElementById("loanTerm");
  let number2 = Number(num2.value);
  const num3 = document.getElementById("rate");
  let number3 = Number(num3.value);
  const messagePara = document.getElementById("messagePara");


  if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }
  let monthly = (number1/number2) / 12 ;
  let interest =(number1 * (number3 / 100)) / 12;
  let answer = monthly + interest ;

  const ans = document.getElementById("monthly");
  const paidIntrest = document.getElementById("interestPaid")
  ans.value = answer;
  paidIntrest.value = interest;
  messagePara.innerHTML = "";
}


