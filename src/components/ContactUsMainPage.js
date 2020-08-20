import React from 'react';
import Form from './Form';
import MyFaq from './Faq';
import Social from './Social';
import Email from './Email';
import './card-style.css';


import { Card, Container,CardBody,CardGroup, Row, Col, CardColumns } from 'reactstrap';
class cardFrame extends React.Component{

render(){

  return(
    
    <CardGroup>
      <Card className="cards-bg" style={{border:'0px'}} >
        <CardBody style={{marginBottom: '-40px'}}>
          <Social/>
        </CardBody>
        <CardBody style={{marginBottom: '-10px'}}>
          <Email/>
        </CardBody>
      </Card>
      <Card className="cards-bg" style={{border:'0px'}}>
        <CardBody >
          <Form/>
        </CardBody>
      </Card>
      <Card className="cards-bg" style={{border:'0px'}}>
        <CardBody >
          <MyFaq/>
        </CardBody>
      </Card>
      
    </CardGroup>
    
  )
}

}
export default cardFrame;
