// 1. Логика для счётчика
let count = 0;
const counterValue = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

function updateCounter() {
    counterValue.textContent = count;
    counterValue.style.color = count > 0 ? 'green' : 'red';
}

// 2. Ловим координаты курсора внутри блока
const coordinateBox = document.getElementById('coordinate-box');
const coords = document.getElementById('coords');

coordinateBox.addEventListener('mousemove', (e) => {
    const rect = coordinateBox.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    coords.textContent = `X: ${x}, Y: ${y}`;
});

// 3. Светофор
const redLight = document.getElementById('red-light');
const yellowLight = document.getElementById('yellow-light');
const greenLight = document.getElementById('green-light');

const colors = {
    red: 'STOP',
    yellow: 'WAIT',
    green: 'GO'
};

function turnOffAllLights() {
    redLight.style.backgroundColor = 'gray';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';
}

const userInput = prompt('Введите цвет светофора (Красный, Желтый, Зеленый):').toLowerCase();

switch (userInput) {
    case 'красный':
        turnOffAllLights();
        redLight.style.backgroundColor = 'red';
        alert(colors.red);
        break;
    case 'желтый':
        turnOffAllLights();
        yellowLight.style.backgroundColor = 'yellow';
        alert(colors.yellow);
        break;
    case 'зеленый':
        turnOffAllLights();
        greenLight.style.backgroundColor = 'green';
        alert(colors.green);
        break;
    default:
        alert('Неверный ввод.');
        break;
}
