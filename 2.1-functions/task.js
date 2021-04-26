'use strict';

//Задача 1
function getSolutions (a, b, c) {

    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];
    let x1;
    let x2;
    let result = {
        D,
        roots
    };


    if (D < 0) {
        return result;

    } else if (D == 0) {
        x1 = -b / (2 * a);
        roots.push(x1);

        return result;

    } else {
        x1 = (-b - Math.sqrt(D)) / (2 * a);
        x2 = (-b + Math.sqrt(D)) / (2 * a);
        roots.push(x1, x2);

        return result;
    }
}

function showSolutionsMessage (a, b, c) {

}
