"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
let percentSum = Number(percent);
let contributionSum = Number(contribution);
let amountSum = Number(amount);
let currentDate = Date();
let currentDateInSec = currentDate.getTime();
let dateToPay = date.getTime();
let creditPeriod = (dateToPay - currentDateInSec)/86400;
    
  
if (typeof percent === "undefined" || percent <= 0) {
return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
} else if (typeof contribution === "undefined" || contribution <= 0) {
    return `Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`;
} else if (typeof amount === "undefined" || amount <= 0) {
    return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
}




    
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}