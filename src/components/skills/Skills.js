import icon1 from '../assets/image/c++.svg';
import icon2 from '../assets/image/icons8-python.svg';
import icon3 from '../assets/image/icons8-javascript.svg';
import icon4 from '../assets/image/icons8-react-native.svg';
import icon5 from '../assets/image/icons8-nodejs.svg';
import icon6 from '../assets/image/mongodb.svg';
import skillsImage from '../assets/image/working.png';
import './Skills.css';
const Skills=()=>{
    return(
        <>
       <section id="skills">
        <div className="container-skills">
            <h1>Skills</h1>
            <div className="skills-div">
                <img src={skillsImage} alt="skills" className="skills-image"/>
                <span className="navbar-text-skills">
                    <h3 className="m-4">Full Stack Development</h3>
                    <div className="social-icon-skills">
                        <a href="#skills"><img src={icon1} alt="" title="CPP" /></a>
                        <a href="#skills"><img src={icon2} alt="" title="Python"/></a>
                        <a href="#skills"><img src={icon3} alt="" title="Javascript" /></a>
                        <a href="#skills"><img src={icon4} alt="" title="React" /></a>
                        <a href="#skills"><img src={icon5} alt="" title="Node" /></a>
                        <a href="#skills"><img src={icon6} alt="" title="MongoDB" /></a>
                    </div>
                    <ul className="skills-lists">
                        <li>Strong problem-solving abilities with a focus on efficient 
                            algorithms and data structures to enhance application performance.
                        </li>
                        <li>Experience in developing RESTful APIs and integrating third-party 
                            services and APIs to enhance application functionality.</li>
                        <li>Expertise in Developing MERN Stack web applications</li>
                    </ul>
                    </span>   
            </div>
        </div>
       </section>
        </>
    )
}

export default Skills;