// ищем элемент документа по селектору
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');

// проверяем, есть ли на странице меню
if (iconMenu) {
  // создаем событие при клике
  iconMenu.addEventListener('click', function (e) {
    // при клике для иконки бургера и выезжающего удаляем или добавляем класс 'active'
    // эти классы можно найти в css и ознакомиться лучше, что они делают
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
  });
}

// закрываем меню, когда нажимаем на ссылки, переходя по якорям
const listMenu = document.querySelector('.menu__list');
listMenu.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link') {
    iconMenu.classList.remove('active');
    menuBody.classList.remove('active');
  }
});
