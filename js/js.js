// N1 //
function drinkMessage() {
    const pivasikTop= document.getElementById("drinkSelect").value;
    const result1 = document.getElementById("drinkResult");
    switch (pivasikTop) {
        case 'Кава':
            result1.textContent = "Не поганий вибір";
            break;
        case 'Чай':
            result1.textContent = "Респектос";
            break;
        case 'Сік':
            result1.textContent = "Геній вибору";
            break;
        default:
            result1.textContent = "";
    }
}



// N2 //
function checkingDay() {
    const day = document.getElementById("dayInput").value;
    const result2 = document.getElementById("dayResult");
    const workdays = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];
    const weekend = ["Субота", "Неділя"];
    
    if (workdays.includes(day)) {
        result2.textContent = "Hard working";
    } else if (weekend.includes(day)) {
        result2.textContent = "Chill guy";
    } else {
        result2.textContent = "Тобі пора спати";
    }
}



// N3 //
function checkingSeason() {
    const month = Number(document.getElementById("monthVvod").value);
    const result3 = document.getElementById("season4k");
    
    if (month < 1 || month > 12) {
        result.textContent = "Введи число від 1 до 12";
    }
    
    if (month >= 3 && month <= 5) {
        result3.textContent = "Весна";
    } 
    else if (month >= 6 && month <= 8) {
        result3.textContent = "Літо";
    } 
    else if (month >= 9 && month <= 11) {
        result3.textContent = "Осінь";
    } 
    else {
        result3.textContent = "Зима";
    }
}



// N4 //
// Тут трохи не зрозумів як робити((




// N5 //
function checkColor() {
    const color = document.getElementById("colorInput").value.toLowerCase();
    const result5 = document.getElementById("colorResult");
    
    switch (color) {
        case 'червоний':
            result5.textContent = "Стоять";
            break;
        case 'зелений':
            result5.textContent = "Йди поки не збили";
            break;
        case 'жовтий':
            result5.textContent = "Почекай декілька годин";
            break;
        default:
            result5.textContent = "Незнаю що за колір ти написав";
    }
}




// N6 //
function calculate() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const lalala = document.getElementById("selectingWhatDoYouLike").value;
    const result6 = document.getElementById("calcResult");
    
    let calculation;
    switch (lalala) {
        case '+':
            lalala = num1 + num2;
            break;
        case '-':
            lalala = num1 - num2;
            break;
        case '*':
            lalala = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result6.textContent = "Ви в школі не вчили що ділити на нуль не можна???";
                return;
            }
            calculation = num1 / num2;
            break;
    }
    
    result.textContent = `Ваш результат: ${calculation}`;
}