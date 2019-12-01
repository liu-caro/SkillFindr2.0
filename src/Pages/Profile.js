import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Profile.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup'
import Jamie from '../Images/jamie.jpeg';
import Octicon, { ArrowLeft, Pencil } from '@primer/octicons-react'



class Profile extends Component {
    render() {

        return (

            <React.Fragment>
                <Container fluid="true">
                    <Row className="titlePadding">
                        <Col xs={6}>
                            <Button style={{ paddingTop: '10px' }} variant="outline-primary" type="button" href="/home">
                                <Octicon icon={ArrowLeft} size='medium' ariaLabel='arrow' />
                            </Button>
                        </Col>

                        <Col xs={6}>
                            <Button className="float-right" style={{ paddingTop: '10px' }} variant="outline-primary" type="button" href="/edit-profile">
                                <Octicon icon={Pencil} size='medium' ariaLabel='pencil' />
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container fluid="true">
                    <Row>
                        <h1>Jamie Camera</h1>
                    </Row>

                    <Row>
                        <Col />
                            <img className="imageFormat" src={Jamie} alt="Jamie" />
                        <Col />
                    </Row>

                    <div className="divider" />

                    <Row>
                        <Col xs={3}>
                            <h3 className="textFormat">About Me</h3>
                        </Col>
                        <Col xs={9}> 
                            <h4>I am a junior at Northeastern university pursuing a degree in computer science and game development.
                            </h4>
                        </Col>
                    </Row>

                    <div className="divider" />

                    <Row>
                        <Col xs={3}>
                            <h3 className="textFormat">My Skills</h3>
                        </Col>
                        <Col xs={9}>
                            <h4>C#, C++, Game Design</h4>
                        </Col>
                    </Row>

                    <div className="divider" />

                    <Row className="justify-content-center"> 
                        <Button className="align-content-center" variant="primary" href="/home">
                            Browse Events
                        </Button>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Profile;