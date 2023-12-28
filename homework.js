var personName = prompt("enter your name...");
var personSurname = prompt("Enter your surname...");
var personAge = prompt("enter you age..");
var personMoneyInUSD = Number(prompt("Enter you money"));
var moneyInUZS = 12400;
let convertedMoney = personMoneyInUSD * moneyInUZS;

function renderAllValues() {
  var outputContainer = document.querySelector(".output");
  var paragraph = document.createElement("p");
  paragraph = `
  this is the person name : ${personName} ${personSurname}
  person age: ${personAge}
  money in USD : ${moneyInUZS}
  converted money: ${convertedMoney}
  `;
  outputContainer.innerHTML = paragraph;
}
renderAllValues();

var nameUser = document.querySelector(".name");
var lastNAme = document.querySelector(".last-name");
var age = document.querySelector(".age");
var inUSD = document.querySelector(".money-usd");
var converted = document.querySelector(".converted");

function renderContent() {
  nameUser.textContent = `person name:  ${personName};`;
  lastNAme.textContent = `person surname:  ${personSurname};`;
  age.textContent = `person age:  ${personAge};`;
  inUSD.textContent = `person money:  ${personMoneyInUSD};`;
  converted.textContent = `converted amount of money:  ${convertedMoney};`;
}
renderContent();
