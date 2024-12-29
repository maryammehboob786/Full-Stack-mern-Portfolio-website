import React from 'react'
import maryam from '../../assets/maryam.jpg';
import theme_pattern from '../../assets/theme_pattern.svg';


const About = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[80px] mx-[80px] my-[170px]'>
        <div className='relative'>
            <h1 className='px-[0] py-[30px] text-[80px] font-semibold '>About Me</h1>
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
                    <div><p>Tailwind</p><hr style={{width:"50%"}}/></div>
                    <div><p>React</p><hr style={{width:"50%"}}/></div>
                    <div><p>Javascript</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h1>10</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div>
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div>
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
            <hr />
            <div></div>
        </div>
    </div>
  )
}

export default About