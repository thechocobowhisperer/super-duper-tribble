import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Input } from 'reactstrap';



const Task = (props) => {

  return (
    <div className='col'>
      <Card>
        
        <CardBody>
          <CardTitle><strong className='float-left'>{props.title}</strong>{props.button}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText><Input>{props.children}</Input></CardText> 
        </CardBody>
      </Card>
    </div>
  );
};

export default Task;