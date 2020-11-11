import React from "react";
import "./mainPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import * as ROUTES from "../../Constants/Routes";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Main(props) {
    return (
        <React.Fragment >
            <h1 className="Events">Events going on...</h1>
            <div>
            <Container>
                <Row>

                <Col sm>


                <Card itemxs= {11} spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour1.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>
                </Card.Body>
                </Card>

                
                </Col>
                
                
                
                <Col sm>
                    

                <Card spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour2.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>
                </Col>
                
                
                <Col sm>

                <Card spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour3.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>
                </Col>

                
                </Row>

                <Row>

                <Col sm>


                <Card spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour1.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>

                
                </Col>
                
                
                
                <Col sm>
                    

                <Card spacing={3} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour2.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>
                </Col>
                
                
                <Col sm>

                <Card spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour3.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>
                </Col>

                
                </Row>

                
                <Row>

                <Col sm>


                <Card spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour1.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>

                
                </Col>
                
                
                
                <Col sm>
                    

                <Card spacing={3} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour2.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>
                </Col>
                
                
                <Col sm>

                <Card spacing={2} style={{ width: '20rem' }}>
                <Card.Img variant="top" src="colour3.JPG" />
                <Card.Body>
                <Card.Title>Sat, Jun 16th, 2020 2PM MDT</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button className="Next" style={{ "position":"relative", "width": "100%", "maxWidth" : "300px" }}
                variant="link"
                onClick={() => props.history.push(ROUTES.HOME)}
              >
                Next </Button>                </Card.Body>
                </Card>
                </Col>

                
                </Row>










            </Container>
            </div>







         </React.Fragment>
    );
}

export default Main;