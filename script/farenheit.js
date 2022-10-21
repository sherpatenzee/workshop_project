"use strict";

window. onload = init;

function init()
{
  const btnConvert = document.getElementById("convertBtn");
  btnConvert.onclick=btnConvertOnClicked;
}

function btnConvertOnClicked()
{
 const farenheit = document.getElementById("farenheit");
 let number1 = Number(farenheit.value);

 let answer = (number1 - 32) * .5556

 const ans = document.getElementById("answer");

 ans.value = answer;

}

