import React from 'react';
import './Footer.css'

export const Footer = () => {
  return <div className="footer" id="contacts">
        <div>
            <h3>Наши контакты</h3>
            <ul>
                <li>+996 505 99 99 99</li>
                <li>+996 707 99 99 99</li>
                <li>+996 777 99 99 99</li>
                <li>hyperpc@gmail.com</li>
            </ul>
        </div>
        <div className="social">
            <h3>Соцсети</h3>
            <ul>
                <li><a href="##"><i className="fa fa-instagram"></i></a></li>
                <li><a href="##"><i className="fa fa-facebook"></i></a></li>
                <li><a href="##"><i className="fa fa-telegram"></i></a></li>
                <li><a href="##"><i className="fa fa-youtube"></i></a></li>
            </ul>
        </div>
    </div>
}

