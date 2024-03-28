import { Accordion } from 'react-bootstrap';
import './Accordion.css'; // Ensure this CSS file contains the styles shown above

function CollapseLink() {
  return (
    <div className='collapse-links'>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Name</Accordion.Header>
          <Accordion.Body>
            Dhruv Bakshi
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Phone</Accordion.Header>
          <Accordion.Body>
            XXXXXXXXXXXXX
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CollapseLink;
