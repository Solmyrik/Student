// ищем элемент документа по селектору
const timerBlock = document.querySelector('.timer__count');

// получаем нынешнее время
const dateCurrent = new Date();

// переводим нынешнюю дату по миллисекундам с 01.01.1970
const millisecondsCurrent = Date.parse(dateCurrent);

// задаем время для экзамена в миллисекундах с 01.01.1970
const millisecondsExam = Date.parse('2023-04-14T13:51:50.417-07:00');

// считаем, сколько осталось времени до экзамена
// в данном случае мы используем let, поскольку значение этой переменной будет меняться
let howLong = millisecondsExam - millisecondsCurrent;

// переводим миллисекунды в секунды
// ~~ это оператор двойная тильда, он локанично отсекает часть после запятой, поскольку нам нужен именно integer
howLong = ~~(howLong / 1000);

// нам нужен как минимум один объект по заданию, поэтому используем его здесь
// здесь у нас будут хранится вместительность разных промежутков времени в секундах
const time = {
  day: 86400,
  hour: 3600,
  minute: 60,
};

// основная функция, которая будет считать дни, часы, минуты и секунды
function timer() {
  // локальное время, которое мы сможем менять без последствий
  currentTime = howLong;
  // локальные переменные для промежутков времени
  let day,
    hour,
    minute,
    second = 0;

  if (currentTime >= time.day) {
    day = ~~(currentTime / time.day);
    currentTime = currentTime % time.day;
  }

  if (currentTime >= time.hour) {
    hour = ~~(currentTime / time.hour);
    currentTime = currentTime % time.hour;
  }

  if (currentTime >= time.minute) {
    minute = ~~(currentTime / time.minute);
    currentTime = currentTime % time.minute;
  }
  addTime(day, hour, minute, currentTime);
  console.log(howLong);
  howLong = howLong - 1;
}

// ищем нужные нам блоки в документе html
const dayBlock = document.querySelector('.day');
const hourBlock = document.querySelector('.hour');
const minuteBlock = document.querySelector('.minute');
const secondBlock = document.querySelector('.second');

// функция, которая передает в html наши данные.
// и добавляет нолики при необходимости
function addTime(day, hour, minute, second) {
  if (day < 9) {
    dayBlock.textContent = `0${day}`;
  } else {
    dayBlock.textContent = `${day}`;
  }

  if (hour < 9) {
    hourBlock.textContent = `0${hour}`;
  } else {
    hourBlock.textContent = `${hour}`;
  }
  if (minute < 9) {
    minuteBlock.textContent = `0${minute}`;
  } else {
    minuteBlock.textContent = `${minute}`;
  }
  if (second < 9) {
    secondBlock.textContent = `0${second}`;
  } else {
    secondBlock.textContent = `${second}`;
  }
}

// setInterval каждную секунду вызывает функцию
setInterval(timer, 1000);
