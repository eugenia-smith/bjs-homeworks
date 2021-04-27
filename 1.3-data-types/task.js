"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    console.log({percent, contribution, amount, date});

    let percentSum = new Number(percent);
    let contributionSum = new Number(contribution);
    let amountSum = new Number(amount);
    let currentDate = new Date();
    let dateToPay = date.getTime();
    let today = currentDate.getTime();
    //new Date(currentDate.getDay, currentDate.getMonth, currentDate.getFullYear);




    if (typeof percent === "undefined" || percent <= 0 || typeof percent === "string") {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (typeof contribution === "undefined" || contribution < 0) {
        return `Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`;
    } else if (typeof amount === "undefined" || amount <= 0) {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    } else if (typeof dateToPay === "undefined" || dateToPay <= today.getTime()) {
        return `Параметр "Дата" содержит неправильное значение ${date}`;
    }

    let percentPerMonth = percentSum / 1200;
    let currentDateInSec = currentDate.getTime();
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

