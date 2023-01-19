const translation = {
  en: {
    table: {
      date: "Date",
      title: "Title",
      amount: "Amount",
      distance: "Distance",
      contains: "Contains",
    },
    about: {
      button: "About this demo",
      text: [
        "Hello! This is my demo project. I admit, it is not the prettiest app in the world, but I've made it in a couple of days just to show, what technologies I can use.",
        "This project is made with the React library. I stuffed it with the React Router, React Context, Redux and Axios.",
        "For instanse, React Context is used for the locale choice. The Redux saves the table info, fetched from the Firebase by Axios. The pagination is implemented with the React Router.",
        "This was a test assignement from one of the headhunters, and I upgraded it a bit. Initially the React Router, React Context, Redux and Axios weren't there.",
        "In short: this page shows you the table from the backend. Users may filter it with the help of the drop-down lists. They also may sort it by the columns in ascending and descending ways.",
      ],
      close: "Close",
    },
  },
  ru: {
    table: {
      date: "Дата",
      title: "Название",
      amount: "Количество",
      distance: "Расстояние",
      contains: "Содержит",
    },
    about: {
      button: "Об этом демо",
      text: [
        "Здравствуйте! Это мой демо проект. Признаю, это не самое симпатичное приложение на свете, но я сделал его за пару дней, чтобы показать, какими технологиями я владею.",
        "Этот проект сделан на библиотеке React. Я нафаршировал его React Router, React Context, Redux и Axios.",
        "Например, React Router хранит выбор языка. Redux сохраняет в себе данные таблицы, получаемой от Firebase через Axios. Пагинация выполнена с помощью React Router.",
        "Это было тестовое задание от одного из рекрутеров. Я слегка его усложнил. Изначально React Router, React Context, Redux и Axios не было.",
        "Вкратце: страница показывает таблицу, полученную с бэкенда. Пользователь может фильтровать её с помощью выпадающего списка. Также возможна сортировка колонок по возрастанию и убыванию.",
      ],
      close: "Закрыть",
    },
  },
};

export default translation;
