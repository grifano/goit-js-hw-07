/* 

Напиши скрипт, який змінює колір фону елемента <body> 
через інлайн-стиль по кліку на button.change-color і 
задає це значення кольору текстовим вмістом для span.color.

Зверни увагу, що функція getRandomHexColor() повертає колір 
у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. 
Це нормально й не потребує якихось правок.

На що буде звертати увагу ментор при перевірці:
- Фон на <body> задається тільки після кліку на button.change-color
- При кожному кліку на елемент button.change-color фон <body> 
зафарбовується новим рандомним кольором
- На <body> і span.color значення одного й того самого кольору

*/

const button = document.querySelector('.change-color');
const colorCodeToShow = document.querySelector('.color');
const body = document.body;

button.addEventListener('click', event => {
  const colorCode = getRandomHexColor();
  body.style.backgroundColor = colorCode;
  colorCodeToShow.textContent = colorCode;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
