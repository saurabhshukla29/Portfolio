import React from 'react';
import Card from 'react-bootstrap/Card';
import navIcon3 from '../assets/image/github-mark.svg';
import './Projects.css';
function Projects() {
  return (
    <section id='projects'>
        <h1 className='mt-5'>Projects</h1>
        <div className="project-div">
            <Card>
            <Card.Body>
                <Card.Title>Chatify</Card.Title>
                <Card.Text>
                ChatApp is a real-time web application where users can make their accounts and chat with others.
                Developed a versatile chat application with secure login/signup, real-time messaging, and multimedia-sharing
                functionalities adeptly.
                </Card.Text>
                <a href="https://github.com/saurabhshukla29/Chatify" target='_blank' rel='noreferrer'><img src={navIcon3} alt="Github"/></a>
            </Card.Body>
            </Card>
            <Card>
            <Card.Body>
                <Card.Title>CP Portal</Card.Title>
                <Card.Text>
                A Full Stack Web Application through which user can access multiple CP websites and will get to know about
                upcoming contests on various CP websites, and the problems were asked in the contests.
                Implemented a To-do-list, login/signup and searching functionalities.
                </Card.Text>
                <a href="https://github.com/saurabhshukla29/CP-Portal" target='_blank' rel='noreferrer'><img src={navIcon3} alt="Github"/></a>
            </Card.Body>
            </Card>
        </div>
    </section>
  )
}

export default Projects