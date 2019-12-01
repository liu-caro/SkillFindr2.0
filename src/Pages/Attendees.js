import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Home.css'
import '../Stylesheets/ideas.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import SearchBar from '../Pages/SearchBar'
import Cari from '../Images/cari.jpeg';
import Jamie from '../Images/jamie.jpeg';
import Cam from '../Images/cam.jpeg';
import Boba from '../Images/boba.jpg';
import Octicon, { Person, Plus, ArrowLeft } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



class Attendees extends Component {
    render() {
        function alertClicked() {
            alert('Pretend this works ;)');
        }


        return (
            <React.Fragment>

                <Row className="titlePadding">
                    <Col >
                        <Button variant="outline-primary" type="button" href="/home">
                            <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                        </Button>
                    </Col>
                    <Col >
                        <Nav className="justify-content-center" fill="true" variant="pills" activeKey="attendees">
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
                <ListGroup>
                    <ListGroup.Item>
                    <Row>
                        <Col xs={2}>
                            <Image src={Cari} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Caroline Liu</h1>

                        </Col>
                    </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                        <Col xs={2}>
                            <Image src={Jamie} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Jamie Camera</h1>

                        </Col>
                    </Row>
                    </ListGroup.Item>

                    <ListGroup.Item >
                    <Row>
                        <Col xs={2}>
                            <Image src={Cam} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Cameron Perry</h1>

                        </Col>
                    </Row>
                    
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Row>
                        <Col xs={2}>
                            <Image src={Boba} thumbnail="true" alt="hackbeanpot" />
                        </Col>
                        <Col xs={10}>
                            <h1>Boba Speedboat</h1>
                        </Col>
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

export default Attendees;