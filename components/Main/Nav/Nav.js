import React from 'react';
import './Nav.css';
import logo from './images/logo.png';

const listItems = [
  'О нас', 'Туры', 'Визы', 'Агентам', 'Контакты', 'Помощь'
]

function renderList (list) {
  return list.map((element, index) => (
   <li key={index}>{element}</li>
  ));
}

export const Nav = () => (
  <ul className="top">
    <img src={logo} className="logo" alt="logo" />
    {renderList(listItems)}
  </ul>
);

export default Nav;
