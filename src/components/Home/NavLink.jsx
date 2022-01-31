import React from 'react';

export const NavLink = () => {
  return <div>
        <ul className="navbar-nav burger-nav">
            <li className="nav-item"> 
                <a href="#/">Главная</a> 
            </li>
            <li className="nav-item"> 
                <a href="#About">О нас</a> 
            </li>
            <li className="nav-item"> 
                <a href="#Courses">Курсы</a>
            </li>
            <li className="nav-item"> 
                <a href="#teachers">Преподаватели</a> 
            </li>
            <li className="nav-item"> 
                <a href="#contacts">Контакты</a>  
            </li>
        </ul>
  </div>;
};
