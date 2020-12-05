import css from "./styles.css";
import postRefs from "./refs";
import menuArray from "./menu.json";
import menuTemplates from "./templates/menu.hbs";

const menuList = postRefs.menu;
const toggle = postRefs.toggle;
const body = postRefs.body;

const menuItem = menuTemplates(menuArray);
const storageKey = "theme";
const localStorageGetValue = localStorage.getItem(storageKey);
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

// создание разметки по шаблону
menuList.insertAdjacentHTML("beforeend", menuItem);

// вешает слушатель события на чекбокс
toggle.addEventListener("change", getCheckedValue);

initView();

// функция с условием для выбора темы
function getCheckedValue() {
  if (toggle.checked === true) {
    changeTheme(Theme.LIGHT, Theme.DARK);
  } else {
    changeTheme(Theme.DARK, Theme.LIGHT);
  }
}

// call-back функция для присваивания темы
// и записи значения в LocalStorage
const changeTheme = (oldTheme, newTheme) => {
  body.classList.remove(oldTheme);
  localStorage.setItem(storageKey, newTheme);
  body.classList.add(newTheme);
};

// call-back функция для изменения значения чекбокса,
// если пользователь выбрал темную тему и обновил страницу
function initView() {
  if (localStorageGetValue === Theme.DARK) {
    toggle.checked = true;
    body.classList.add(Theme.DARK);
  }
}
