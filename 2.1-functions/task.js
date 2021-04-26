'use strict';

//Задача 1

let x1;
let x2;

function getSolutions (a, b, c) {

    let D = Math.pow(b, 2) - 4 * a * c;
    let roots = [];
    let solutions = {
        D,
        roots
    };

    if (D < 0) {
        return solutions;

    } else if (D == 0) {
        x1 = -b / (2 * a);
        roots.push(x1);

    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        roots.push(x1, x2);
    }

    return solutions;
}


function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots.length == 2) {
        console.log(`Уравнение имеет два корня X₁ = ${x1}, X₂ = ${x2}`);
    } else if (result.roots.length == 1) {
        console.log(`Уравнение имеет один корень X₁ = ${x1}`);
    } else {
        console.log('Уравнение не имеет вещественных корней');
    }

}
