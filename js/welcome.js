// ищем элемент документа по селектору
const welcome = document.querySelector('.welcome');

// создаем событие и ждем момента, пока все ресурсы будут загружены
window.addEventListener('load', function (event) {
  // меняем стили блока welcome таким образом, чтобы он появился
  welcome.style.display = 'block';

  // спустя 6000 миллисекунд возвращаем стилям welcome изначальное значение
  setTimeout(() => {
    welcome.style.display = 'none';
  }, 6000);
});
