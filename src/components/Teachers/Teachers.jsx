import React from 'react';
import './Teachers.css'
import Dmitriy from '../../images/Ellipse 1.png';
import Alexandr from '../../images/Ellipse 2.png'
import Anton from '../../images/Ellipse 3.png';
import '../../styles/Adaptive.css';

export const Teachers = () => {
  return <div className='teachers' id='teachers'>
    <div>
      <h1>Ваши преподаватели</h1>
    </div>

    <div>
                <div className="containerTeachers">
                    <div className="teacher">
                        <img src={Dmitriy} alt="Dmitriy" />
                        <h5>Дмитрий Иванов</h5>
                        <p>Специалист по видеокартам</p>
                        <a href="##">Биография</a>
                    </div>
                    <div className="teacher">
                        <img src={Alexandr} alt="Alexandr" />
                        <h5>Александр Михаилов</h5>
                        <p>Специалист по видеокартам</p>
                        <a href="##">Биография</a>
                    </div>
                    <div className="teacher">
                        <img src={Anton} alt="Anton" />
                        <h5>Антон Германов</h5>
                        <p>Специалист по видеокартам</p>
                        <a href="##">Биография</a>
                    </div>
                </div>
        </div>
              
</div>
};

