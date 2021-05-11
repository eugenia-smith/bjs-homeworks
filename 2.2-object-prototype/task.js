String.prototype.isPalindrome = function () {
    let original = this.toLowerCase().replace(/\s/g, '');
    let reverse = original.split('').reverse().join('');
    //console.log(original);
    //console.log(reverse);
    return original === reverse;
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}