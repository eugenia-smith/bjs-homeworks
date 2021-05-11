String.prototype.isPalindrome = function () {
    let original = this.toLowerCase().replace(/\s/g, '');
    let reverse = original.split('').reverse().join('');
    //console.log(original);
    //console.log(reverse);
    return original === reverse;
}

function getAverageMark(marks) {
    let sum = 0;

    if (marks.length == 0) {
        return sum;
    }

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    let average = sum / marks.length;
    let roundedAverage = Math.round(average);

    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}