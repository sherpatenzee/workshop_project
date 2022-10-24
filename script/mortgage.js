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
  let loan = Number(num1.value);
  const num2 = document.getElementById("loanTerm");
  let years = Number(num2.value) * 12;
  const num3 = document.getElementById("rate");
  let rate = Number(num3.value)/ 100 / 12;
  const messagePara = document.getElementById("messagePara");


  if (isNaN(loan) || isNaN(years)) {
    messagePara.innerHTML =
      "One or more of your input values are invalid";
  return; 
  }

  // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]. 

  let monthly1 = rate * Math.pow(1 + rate, years );
  let monthly2 =  Math.pow(1 + rate , years ) - 1;
  let monthly = loan * monthly1 / monthly2;

  let interest = (monthly * years) - loan;

  

  
  

  const ans = document.getElementById("monthly");
  const paidIntrest = document.getElementById("interestPaid")
  ans.value = monthly.toFixed(2);
  paidIntrest.value = interest.toFixed(2);
  messagePara.innerHTML = "";
}


