import React from 'react';
import './Home.css'
import { useState, useEffect } from 'react';
import logo from '../../images/Group.png';
import { Link } from 'react-router-dom';


export const Home = () => {
    const [open, setOpen] = useState(false)

  const [days, setDays] = useState(8)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(12)

  useEffect(() => {
      let interval =setInterval(() => {
          clearInterval(interval);
              if(seconds !== 0) {
                  setSeconds(seconds - 1)
              }else if(minutes !== 0) {
                  setSeconds(59)
                  setMinutes(minutes - 1)
              }else if(hours !== 0) {
                  setMinutes(59)
                  setSeconds(59)
                  setHours(hours - 1)
              }else if(days !== 0) {
                  setHours(23)
                  setMinutes(59)
                  setSeconds(59)
                  setDays(days - 1)
              }
      }, 1000)
  },[seconds])

  const timerDays = days < 10 ? `0${days}` : days;
  const timerHours = hours < 10 ? `0${hours}` : hours;
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return <div className="home" id="/">
      <div className="containers">
            <div className="container">
                <nav className="navbar navbar-expand-lg " >
                    <div className="container-fluid">
                        <img src={logo} alt="img-navbar" />

                        <div className="navbar">
                            <ul className="navbar-nav burger-nav">
                                <li className="nav-item"> <a href="#/">Главная</a>  </li>
                                <li className="nav-item"> <a href="#About">О нас</a>  </li>
                                <li className="nav-item"> <a href="#Courses">Курсы</a> </li>
                                <li className="nav-item"> <a href="#teachers">Преподаватели</a> </li>
                                <li className="nav-item"> <a href="#contacts">Контакты</a>  </li>
                            </ul>
                        </div>
                            <Link to="/registration" target={"_blank"}>
                                <button type="button" className="btn btn-danger">Регистрация</button>
                            </Link> 
                    </div>
                </nav>
            </div>
                        {/* containerHome */}

            <div className="containerHome">
                <div className="topic">
                    <h1>Первый курс <br/> по компьютерной сборке</h1>
                </div>

                <div className="countdownTimer">
                    <div className="timer">
                        <span>{timerDays}</span>
                        <p>Дней</p>
                    </div>
                    <div className="timer">
                        <span>{timerHours}</span>
                        <p>Часов</p>
                    </div>
                    <div className="timer">
                        <span>{timerMinutes}</span>
                        <p>Минут</p>
                    </div>
                    <div className="timer">
                        <span>{timerSeconds}</span>
                        <p>Секунд</p>
                    </div>
                </div>
            </div>
                            {/* homeFooter */}

                
            <div className="homeFooter">
                    <a href="registration" target={'_blank'} className="btn-course">Записаться на курс</a>
                <div className='results'>
                    <span style={{display: 'flex'}}>
                        <p style={{opacity: "0.4"}}>Учеников всего:</p>
                        <p style={{marginLeft: '15.80px'}}>200</p>
                    </span>
                    <span style={{display: 'flex', justifyContent: 'space-beween'}}>
                        <p style={{opacity: "0.4"}}>Успешно закончили курс:</p> 
                        <p style={{marginLeft: '15px'}}>190</p>
                    </span>
                </div>
                <div class="begin">
                    <h3 style={{color: 'Firebrick'}}>Начни свой путь </h3>
                </div>
            </div>
        </div>
</div>
}

