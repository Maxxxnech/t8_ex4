import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = [
  {
    id: 1,
    title: "React",
    subtitle: "Библиотека для создания пользовательских интерфейсов",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/270px-React-icon.svg.png",
  },
  {
    id: 2,
    title: "Angular 2",
    subtitle: "Один фреймворк",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular.png",
  },
  {
    id: 3,
    title: "Ember",
    subtitle: "Фреймворк для создания амбициозных веб-приложений",
    imageUrl: "https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg",
  },
  {
    id: 4,
    title: "Vue",
    subtitle: "Прогрессивный фреймворк",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/277px-Vue.js_Logo_2.svg.png",
  },
];
ReactDOM.render(
  <React.StrictMode>
    <App heroes={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
