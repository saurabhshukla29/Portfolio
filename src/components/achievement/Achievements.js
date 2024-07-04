import React from 'react';
import Card from 'react-bootstrap/Card';
import './Achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import cfLogo from '../assets/image/codeforces-Photoroom.png';
import gfgLogo from '../assets/image/gfg-Photoroom.png';
import leetLogo from '../assets/image/leetcode-Photoroom.png';
import ccLogo from '../assets/image/cc-logo.svg';
import iitLogo from '../assets/image/Indian_Institute_of_Technology,_Indore_Logo.png';
// import mainsLogo from '../assets/image/NtaLogo.png';
import boardLogo from '../assets/image/boardlogo.svg';
function Achievements() {
return (
  <section id='achievements'>
      <h1 className='mt-5 mb-5'>Achievements</h1>
      <div className='achievements-div'>

              <Card>
              <img src={cfLogo} alt="codeforces"/>
              <Card.Body>
                  <Card.Title>Pupil(1363) at Codeforces</Card.Title>
                  <a href='https://codeforces.com/profile/saurabh_12_IITI' target='_blank' rel='noreferrer'><p>Handle:saurabh_12_IITI</p></a>
              </Card.Body>
              </Card>


              <Card>
              <img src={ccLogo} alt="codechef"/>
              <Card.Body>
                  <Card.Title>3 <FontAwesomeIcon icon={faStar} color="gold"></FontAwesomeIcon>(1707) at Codechef</Card.Title>
                  <a href='https://www.codechef.com/users/saurabhshukla9' target='_blank' rel='noreferrer'><p>Handle:saurabhshukla9</p></a>
              </Card.Body>
              </Card>


              <Card>
              <img src={gfgLogo} alt="GeeksforGeeks"/>
              <Card.Body>
              <Card.Title>4 <FontAwesomeIcon icon={faStar} color="gold"></FontAwesomeIcon>(1803) at GFG Contests Rating</Card.Title>
              <a href='https://www.geeksforgeeks.org/user/saurabhshukla29/' target='_blank' rel='noreferrer'><p>Handle:saurabhshukla29</p></a>
              </Card.Body>
              </Card>


              <Card>
              <img src={leetLogo} alt="leetcode"/>
              <Card.Body>
                  <Card.Title>LeetCode</Card.Title>
                  <a href='https://leetcode.com/u/Saurabh_Shukla_29/' target='_blank' rel='noreferrer'><p>Handle:Saurabh_Shukla_29</p></a>
              </Card.Body>
              </Card>


              <Card>
              <img src={cfLogo} alt="codeforces"/>
              <Card.Body>
              <Card.Title>Global Rank 2033 in Codeforces Round 880</Card.Title>
              <p>among 30000+ participants</p>
              </Card.Body>
              </Card>


              <Card>
              <img src={gfgLogo} alt="GeeksforGeeks"/>
              <Card.Body>
              <Card.Title>81st Rank in GFG weekly 160</Card.Title>
              <p>among 3000+ participants</p>
              </Card.Body>
              </Card>


              <Card>
              <img src={iitLogo} alt="jee adv"/>
              <Card.Body>
                  <Card.Title>AIR 6449 in JEE Advanced 2021</Card.Title>
                  <p>among more than 2 lakhs students</p>
              </Card.Body>
              </Card>


              {/* <Card>
              <img src={mainsLogo} alt="codeforces"/>
              <Card.Body>
                  <Card.Title>Bachelor of Technology</Card.Title>
              </Card.Body>
              </Card> */}


              <Card>
              <img src={boardLogo} alt="boards"/>
              <Card.Body>
                  <Card.Title>100 out of 100 in Mathematics</Card.Title>
                  <p>in HSC Board Exam 2020</p>
              </Card.Body>
              </Card>
      </div>
  </section>
  )
}

export default Achievements