import React from 'react';
import './About.css'
import compPicture from '../../images/image.png'

export const About = () => {
  return (
    <div className="about" id="About">
            <div className="compPicture">
                <img src={compPicture} alt="computer"/>
            </div>
            <div className="aboutContainer">
                <h1>Чем мы занимаемся?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. 
                    Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. 
                    Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, 
                    cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </p>
            </div>
        </div>
  )
      
};

