import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/ideas.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import SearchBar from '../Pages/SearchBar'
import Octicon, { Plus, ArrowLeft } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';



class Ideas extends Component {
    render() {
        function alertClicked() {
            alert('Pretend this works ;)');
        }

        return (
            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Col>
                            <Button variant="outline-primary" type="button" href="/home">
                                <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                            </Button>
                        </Col>

                        <Col>
                            <Nav className="justify-content-center" fill="true" variant="pills" activeKey="ideas">
                                <Nav.Item>
                                    <Nav.Link eventKey="event" href="/event">Event</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ideas" href="/ideas">Ideas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="attendees" href="/attendees">Attendees</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col> 

                        <Col />
                    </Row>

                    <Row>
                        <SearchBar />
                    </Row>
                </Container>

                <ListGroup>
                    <ListGroup.Item action href="/idea-page">
                        <Row>
                            <Col xs={10}>
                                <h1>Salem</h1>
                            </Col>
                            
                            <Col xs={2}>
                                <Badge className="float-right m-2" pill="true" variant="primary">Members: 2/4</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <h2>
                                Hidden role card game
                            </h2>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item action onClick={alertClicked}>
                        <Row>
                            <Col xs={10}>
                                <h1>Loot</h1>
                            </Col>
    
                            <Col xs={2}>
                                <Badge className="float-right m-2" pill="true" variant="primary">Members: 1/4</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <h2>
                               Generate terrain and find treasure
                            </h2>
                        </Row>
                    </ListGroup.Item>


                    <ListGroup.Item action onClick={alertClicked}>
                        <Row>
                            <Col xs={10}>
                                <h1>No More Geeses</h1>
                            </Col>

                            <Col xs={2}>
                                <Badge className="float-right m-2" pill="true" variant="primary">Members: 3/4</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <h2>
                                Please, help us with the geese
                            </h2>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>

                <div className="bottomright">
                    <Button href="create-event">
                        <Octicon icon={Plus} size='medium' ariaLabel='Plus' />
                    </Button>
                </div>

            </React.Fragment>


        );
    }
}

export default Ideas;