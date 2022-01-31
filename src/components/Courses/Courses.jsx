import React from 'react';
import iconCcomp from '../../images/icon-comp.png';
import iconUSB from '../../images/icon-USB.png';
import iconCable from '../../images/icon-cable.png';
import './Courses.css'

export const Courses = () => {
  return <div className="courses" id="Courses">
  <div>
      <h1>Получите профессию прямо сейчас</h1>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
        <img src={iconCcomp} alt="iconComputer" />
            <h3>Только практические <br/> навыки в работе</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. 
            Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
      </div>
      <div class="col">
        <img src={iconUSB} alt="iconUSB" />
            <h3>Работа на самом <br/> современном оборудовании</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. 
            Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
      </div>
      <div class="col col3">
        <img src={iconCable} alt="iconCable " className='img3'/>
            <h3>Сертификация <br/> по окончании обучения</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget velit quisque accumsan amet tortor. 
            Velit, volutpat egestas fringilla mi porttitor tempus. Placerat dui.</p>
      </div>
    </div>
    y</div>

</div>

};

