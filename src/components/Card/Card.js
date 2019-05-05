import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Input } from 'reactstrap';



const Task = (props) => {

  return (
    <div>
      <Card>
        
        <CardBody>
          <CardTitle className='d-inline'><h3>{props.title}</h3>{props.button}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText><Input>{props.children}</Input></CardText> 
        </CardBody>
      </Card>
    </div>
  );
};

export default Task;