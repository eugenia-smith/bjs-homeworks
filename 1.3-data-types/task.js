"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    if (typeof percent === "undefined" || percent <= 0) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (typeof contribution === "undefined" || contribution < 0) {
        return `Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`;
    } else if (typeof amount === "undefined" || amount <= 0) {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    }

    let percentSum = Number(percent);
    let percentPerMonth = percentSum / 1200;
    let contributionSum = Number(contribution);
    let amountSum = Number(amount);
    let currentDate = new Date();
    let currentDateInSec = currentDate.getTime();
    let dateToPay = date.getTime();
    let creditPeriod = Math.ceil(((dateToPay - currentDateInSec) / 86400000) / 30);
    let creditSum = amountSum - contributionSum;

    let monthlyPayment = creditSum * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ^ creditPeriod) - 1));

    let totalAmount = (monthlyPayment * creditPeriod).toFixed(2);


    //console.log(creditPeriod);

    return totalAmount;
}

function getGreeting(name) {
    let anonymous = "Аноним";
    let greeting = `Привет, мир! Меня зовут ${name}.`

    if (typeof name === "undefined" || name === "") {
        greeting = `Привет, мир! Меня зовут ${anonymous}.`;
    }
    return greeting;
}

