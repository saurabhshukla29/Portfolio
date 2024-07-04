import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import IIT from '../assets/image/Indian_Institute_of_Technology,_Indore_Logo.png';
import RJ from '../assets/image/College-Logo-2023-pink.png';
import GVM from '../assets/image/gvm_logo-Photoroom.png';
import './Education.css';
function Education() {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const itemsIIT=[
            {
            Institution:"Indian Institute of Technology Indore",
            Branch:"Mechanical Engineering",
            Grade:"7.53",
            Year:"2021-2025"
            }
        ];
    const itemsRJ=[
        {
        Institution:"RJ College, Mumbai",
        Branch:"Science(Physics,Chemistry,Mathematics,Biology)",
        Grade:"82.46%",
        Year:"2018-2020"
        }
    ];
    const itemsGVM=[
        {
        Institution:"Gyanodaya Vidya Mandir, Thane",
        Branch:"-",
        Grade:"88.40%",
        Year:"2006-2018"
        }
    ];
    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
      };
    
      const handleClose = () => {
        setShow(false);
        setSelectedItem(null);
      };
  return (
    <section id='education'>
        <h1>Education</h1>
        <div className='education-div'>
        {itemsIIT.map((item,index)=>(
            <div className='educaion-card' key={index}>
            <Card>
            <Card.Img variant="top" src={IIT} />
            <Card.Body>
                <Card.Title>Bachelor of Technology</Card.Title>
                <Button variant="primary" onClick={()=>handleShow(item)}>More</Button>
            </Card.Body>
            </Card>
        </div>))}
        {itemsRJ.map((item,index)=>(
            <div className='educaion-card' key={index}>
            <Card >
            <Card.Img variant="top" src={RJ} />
            <Card.Body>
                <Card.Title>Higher Secondary Education</Card.Title>
                <Button variant="primary" onClick={()=>handleShow(item)} >More</Button>
            </Card.Body>
            </Card>
        </div>))}
        {itemsGVM.map((item,index)=>(
            <div className='educaion-card' key={index}>
            <Card>
            <Card.Img variant="top" src={GVM} />
            <Card.Body>
                <Card.Title>Secondary Education</Card.Title>
                <Button variant="primary" onClick={()=>handleShow(item)}>More</Button>
            </Card.Body>
            </Card>
        </div>))}
        </div>
        {selectedItem && (
        <Modal show={show} onHide={handleClose} variant='dark'>
          <Modal.Body>
            <p><strong>Institution: </strong>{selectedItem.Institution}</p>
            <p><strong>Branch/Stream: </strong> {selectedItem.Branch}</p>
            <p><strong>Grade: </strong> {selectedItem.Grade}</p>
            <p><strong>Year: </strong>{selectedItem.Year}</p>
            {/* <ul>
              {selectedItem.details?.summary.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p><strong>Skills Used:</strong></p> */}
            {/* <div>
              {selectedItem.details?.skills.map((skill, idx) => (
                <span key={idx} className="badge bg-primary me-1">{skill}</span>
              ))}
            </div> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  )
}

export default Education