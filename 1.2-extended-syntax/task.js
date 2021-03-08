function getResult(a,b,c){
    'use strict';

    let discreminant = Math.pow(b, 2) - 4 * a * c;
    let x = [];

    if (discreminant < 0) {
        x = [];
    } else if (discreminant == 0) {
        let value = -b/(2*a);
        x.push(value);
    } else if (discreminant > 0) {
        let value1 = (-b - Math.sqrt(discreminant)) / (2 * a);
        let value2 = (-b + Math.sqrt(discreminant)) / (2 * a);
        x.push(value1, value2);
    }
    
    return x;

}

function getAverageMark(marks){
    let sum = 0;
    let result = 0;
    let marksCut = marks.slice(0, 5);

    
    if (marks.length == 0) {
        return result;

    } else if (marks.length <= 5) {
        for (i = 0; i < marks.length; i++) {
    
            sum += marks[i];
        }

        result = sum / marks.length;
        return result;

        
    } else if (marks.length > 5) {
        for (j = 0; j < marksCut.length; j++) {
            
            sum += marksCut[j];
        }
        
        result = sum / marksCut.length;

        console.log('Массив оценок слишком велик');
        return result;
    }
    
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}