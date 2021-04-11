'use strict'

function getResult(a,b,c){

    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x = [];

    if (discriminant == 0) {
        let value = -b/(2*a);
        x.push(value);
        
    } else if (discriminant > 0) {
        let value1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let value2 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x.push(value1, value2);
    }
    
    return x;

}

function getAverageMark(marks){
    let sum = 0;
    let marksCut = marks.slice(0, 5);
    
    if (marks.length == 0) {
        return 0;

    } else {
        for (let i = 0; i < marksCut.length; i++) {
    
            sum += marksCut[i];
        }

        return sum / marksCut.length;
    }
    
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}