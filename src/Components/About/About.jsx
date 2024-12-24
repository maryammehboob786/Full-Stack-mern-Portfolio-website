import React from 'react'
import maryam from '../../assets/maryam.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';


const About = () => {
  return (
    <div>
        <div>
            <h1>About Me</h1>
            <img src="{theme_pattern}" alt="" />
        </div>
        <div>
            <div>
               <img src="{Maryam}" alt="" /> 
            </div>
            <div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur suscipit, earum itaque nostrum soluta eum ex eaque molestiae ipsam alias inventore ea vitae recusandae voluptatum cumque porro illo! Sapiente.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum delectus deserunt sed explicabo iusto et, quis beatae praesentium fugit necessitatibus! Dolorum voluptatem voluptas optio magnam eaque quam mollitia reiciendis alias!</p>
                </div>
                <div>
                    <div><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About