const Home = require('./components/pages/Home');

const routes = Object.freeze({
  home: Object.freeze({
    title: 'Home',
    path: 'home',
    href: '#/',
    pattern: /^\/?$/,
    component: Home,
    onEnter: Home.onPageEnter,
    onLeave: Home.onPageLeave,
  }),
});

module.exports = routes;
