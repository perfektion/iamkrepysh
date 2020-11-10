import { createStore } from 'vuex';

export type State = { navItems: [{}] };

export const store = createStore({
  state: {
    navItems: [
      {
        title: 'Какую пользу принесут тренировки?',
        link: '#benefit',
      },
      {
        title: 'База физической подготовки',
        link: '#base',
      },
      {
        title: 'Как проходят тренировки?',
        link: '#video-training',
      },
      {
        title: 'Смотрите тренировки онлайн',
        link: '#online',
      },
      {
        title: 'Статистика',
        link: '#statistics',
      },
      {
        title: 'Тренируйся играя!',
        link: '#iamicon',
      },
      {
        title: 'Результаты крепышей',
        link: '#results',
      },
      {
        title: 'Почему нас любят?',
        link: '#reviews-video',
      },
      {
        title: 'История создания школы',
        link: '#history',
      },
      {
        title: 'Наши тренеры',
        link: '#trainers',
      },
      {
        title: 'Технология Safe Gym',
        link: '#safegym',
      },
      {
        title: 'Стоимость тренировок',
        link: '#cost',
      },
      {
        title: 'Пробная тренировка',
        link: '#trial-training',
      },
      {
        title: 'Ответы на вопросы родителей',
        link: '#questions',
      },
      {
        title: 'Мобильное приложение',
        link: '#mobile-app',
      },
      {
        title: 'Контакты',
        link: '#footer',
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
