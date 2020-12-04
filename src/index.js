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

// вешает слышатель события на чекбокс
toggle.addEventListener("change", () => {
  getCheckedValue();
});

initView();

// call-back функция для присваивания темы
// и записи значения в LocalStorage
function getCheckedValue() {
  if (toggle.checked === true) {
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem(storageKey, Theme.DARK);
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    localStorage.setItem(storageKey, Theme.LIGHT);
    body.classList.add(Theme.LIGHT);
  }
}

// call-back функция для изменения значения чекбокса,
// если пользователь выбрал темную тему и обновил страницу
function initView() {
  if (localStorageGetValue === Theme.DARK) {
    toggle.checked = true;
    body.classList.add(Theme.DARK);
  }
}
