import logo from "../assets/image/saurabhLogo.jpg";
import navIcon1 from '../assets/image/nav-icon1.svg';
import navIcon2 from '../assets/image/nav-icon2.svg';
import navIcon3 from '../assets/image/github-mark-white.png';
import navIcon4 from '../assets/image/mailLogo-Photoroom.png';
import './Footer.css';
function Footer() {
  return (
    <footer className="footer">
            <img src={logo} alt="Logo" style={{height:"200px",width:"300px",borderRadius:"20%"}}/>
            <div className="footer-div">
            <h1>Reach Out to Me</h1>
            <p>Have you any question? Feel free to get in touch 
                with me.
                <br/>
                 My Inbox is open to all Opportunities and Collabration!
            </p>
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/saurabh-shukla-224a50241/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://www.facebook.com/profile.php?id=100025367809413" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://github.com/saurabhshukla29" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Github" /></a>
                <a href="mailto:saurabhshukla398@gmail.com" target="_blank" rel="noreferrer"><img src={navIcon4} alt="Github" /></a>
            </div>
            </div>
    </footer>
  )
}

export default Footer