"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {

    //console.log({percent, contribution, amount, date});

    let percentSum = parseInt(percent, 10);
    let contributionSum = parseInt(contribution, 10);
    let amountSum = parseInt(amount, 10);
    let currentDate = new Date();
    let dateToPay = date.getTime();
    //console.log(currentDate.getTime());
    //console.log(dateToPay);
    //console.log(percentSum, contributionSum, amountSum, dateToPay);

    if (typeof percent === "undefined" || percent <= 0) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (typeof contribution === "undefined" || contribution < 0) {
        return `Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`;
    } else if (typeof amount === "undefined" || amount <= 0) {
        return `Параметр "Сумма кредита" содержит неправильное значение ${amount}`;
    } else if (typeof dateToPay === "undefined" || dateToPay <= currentDate.getTime()) {
        return `Параметр "Дата" содержит неправильное значение ${date}`;
    }

    let percentPerMonth = percentSum / 100 / 12;

    let creditPeriod = Math.floor(((dateToPay - currentDate.getTime()) / 86400000) / 30);
    //console.log(creditPeriod);

    let creditSum = amountSum - contributionSum;

    let monthlyPayment = creditSum * (percentPerMonth + percentPerMonth / (Math.pow((1 + percentPerMonth), creditPeriod) - 1));
    //console.log(monthlyPayment);

    let totalAmount = parseFloat((monthlyPayment * creditPeriod).toFixed(2));


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

