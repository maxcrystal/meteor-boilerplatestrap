import React from 'react';
import { Container, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import PrivateHeader from './PrivateHeader.js';


export default (props) => (
  <div>
    <PrivateHeader title="Dashboard"/> 
    <Container className="page-content">  
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button color="primary">Button</Button>
        </CardBody>
      </Card>
    </Container>
  </div>
);
