document.getElementById('fb').onclick = firstTask;

function firstTask() {

    let firstNum = prompt('1 число');
    let secNum = prompt('2 число');
    let step = firstNum;
    console.log(typeof firstNum);
    console.log(typeof secNum);
    firstNum = Number(firstNum);
    secNum = Number(secNum);

    for (let counter = 0; step <= secNum + 1; step++, counter += firstNum, firstNum++) {

        console.log("сумма равна" + counter);
    }

}

document.getElementById('sb').onclick = secondTask;

function secondTask() {
    let firstNum = prompt('1 число');
    let secNum = prompt('2 число');
    let thirdNum;
    firstNum = Number(firstNum);
    secNum = Number(secNum);
    console.log(firstNum);


    calc(firstNum, secNum);
    alert('НОД чисел ' + firstNum + ' и ' + secNum + ' будет: ' + thirdNum);

    function calc(a, b) {
        let c;
        while (a != b) {
            if (a > b) {
                a = a - b;

            } else
            if (a < b) {
                c = a;
                a = b;
                b = c;
            }

        }
        return thirdNum = a
    }

}

document.getElementById('tb').onclick = thirdTask;

function thirdTask() {
    let number = prompt('1 число');
    number = Number(number);

    for (i = 1; i <= number; i++) {
        if (Number.isInteger(number / i)) {
            console.log(i);
        }
    }
}

document.getElementById('fob').onclick = fourthTask;

function fourthTask() {

    let num = prompt('Введите число');

    function countDigits(n) {
        for (var i = 0; n > 1; i++) {
            n /= 10;
        }
        return i;
    }
    console.log('В переменной num %s знаков', countDigits(num));

}

document.getElementById('fib').onclick = fifthTask;

function fifthTask() {

    let num;
    let chetnoe = 0;
    let nechet = 0;
    let polog = 0;
    let otric = 0;
    let zero = 0;

    for (i = 0; i < 10; i++) {

        let num = prompt("Введите число");

        if (num % 2 == 0) {

            chetnoe++;

        } else if (num % 2 != 0) {

            nechet++;

        }

        if (num > 0) {

            polog++;

        } else if (num < 0) {

            otric++;

        } else if (num == 0) {

            zero++;
        }
    }
    console.log(`Четных ${chetnoe} , нечетных ${nechet} , положительных ${polog} , отрицательных ${otric}`)

}

document.getElementById('sib').onclick = sixthTask;

function sixthTask() {

    let checker = confirm("Заупстить калькулятор ?");
    if (checker == true) {
        //Рабочее решение но очень странное
        /*for (i = 0; i != true; i++) {

            console.log(i);
            let numFirst = prompt("Первое число");

            let numSecond = prompt("Второе число");

            numFirst = Number(numFirst);

            numSecond = Number(numSecond);

            i = Boolean(i);
            console.log(i);
            console.log(numFirst + numSecond);
            i = confirm("Хотите продолжить?");
            console.log(i);
        }*/
        let i = true;
        while (i != false) {

            let numFirst = prompt("Первое число");
            let signNum = prompt("Введите знак")
            let numSecond = prompt("Второе число");

            numFirst = Number(numFirst);

            numSecond = Number(numSecond);

            switch (signNum) {
                case "+":
                    alert(`Результат сложения ${numFirst+numSecond}`);
                    break;
                case "-":
                    alert(`Результат вычитания ${numFirst-numSecond}`);
                    break;
                case "*":
                    alert(`Результат умножения ${numFirst*numSecond}`);
                    break;
                case "/":
                    alert(`Результат деления ${numFirst+numSecond}`);
                default:
                    alert("Не верно веденный математический знак");
            }

            i = confirm("Хотите продолжить?");
        }
    } else {

        alert("До свидания!");

    }
}

document.getElementById('seb').onclick = sevenButton;

function sevenButton() {

    let browserType = prompt("Введите строку");

    for (let i = 0; i < 2; i++) {
        browserType = browserType + browserType[0];
        console.log(browserType);
        browserType = browserType.slice(1);
        console.log(browserType);

    }
    alert(browserType);

}

document.getElementById('eib').onclick = eightButton;

function eightButton() {

    let i = true;
    let day = 0;

    while (i != false) {

        day = day + 1;
        switch (day) {
            case 1:
                alert(`Понедельник`);
                break;
            case 2:
                alert(`Вторник`);
                break;
            case 3:
                alert(`Среда`);
                break;
            case 4:
                alert(`Четверг`);
                break;
            case 5:
                alert(`Пятница`);
                break;
            case 6:
                alert(`Суббота`);
                break;
            case 7:
                alert(`Воскресенье`);
                break;
            default:
                if (day > 7) {
                    day = 1;
                    alert('Понедельник');
                }
        }

        i = confirm('Следующий день недели?');
    }

}

document.getElementById('nib').onclick = nineButton;

function nineButton() {
    for (let fnum = 2; fnum < 11; fnum++) {
        for (let secnum = 1; secnum < 11; secnum++) {

            console.log(fnum * secnum);

        }
    }
}

document.getElementById(ten).onclick = tenButton;

function tenButton() {
    let num = prompt('Введите ваше число от 1 до 100. Будем угадывать :)')
    let numChecker;
    if (num < 101 && num > 0) {
        while (num != numChecker) {

        }
    } else {
        alert('Хочешь меня обмануть?')
    }

}