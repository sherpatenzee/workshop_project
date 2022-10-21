"use strict";

window. onload = init;

function init()
{
  const btnConvert = document.getElementById("convertBtn");
  btnConvert.onclick=btnConvertOnClicked;
}

function btnConvertOnClicked()
{
 const celsius = document.getElementById("celsius");
 let number1 = Number(celsius.value);

 let answer = (number1 * 1.8) + 32;

 const ans = document.getElementById("answer");

 ans.value = answer;

}

