import React from 'react';
import './Footer.css';
import instagram from './images/instagram.png';
import vk from './images/vk.png';
import twitter from './images/twitter.png';
import facebook from './images/facebook.png';

export const Footer = ({ email, phone1, phone2, adress }) => (
  <footer>
    <div className="contact1">
      <span>E-mail</span>
      <span className="right3">{email}</span>
      <span>Телефоны</span>
      <span className="right4">{phone1}</span>
      <span>Мы в соцсетях</span>
    </div>
    <div className="contact2">
      <span>Адрес</span>
      <span className="right5">{adress}</span>
      <span className="right6">{phone2}</span>
      <img src={instagram} alt="instagram" />
      <img src={vk} alt="vk" />
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
    </div>
  </footer>
);

export default Footer;
