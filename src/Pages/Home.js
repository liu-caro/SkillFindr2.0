import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import SearchBar from '../Pages/SearchBar'
import HackBeanpot from '../Images/hbp-logo.png';
import CommunityGameJam from '../Images/cgj-logo.png';
import HackNYU from '../Images/hnyu-logo.jpg';
import Octicon, { Person, Plus } from '@primer/octicons-react'



class Home extends Component {
    render() {
        function alertClicked() {
            alert('Pretend this works ;)');
        }

        return (

                
            <html>
                <head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />
                </head>
                <body>
                    <Container fluid="true">
                        <Row>
                            <Col xs={6}>
                                <h2>Upcoming Events</h2>
                            </Col>
                            <Col xs={6}>
                                <div class="float-right">
                                    <button class="btn btn-primary" routerLink="/profile">
                                        <Octicon icon={Person} size='small' ariaLabel='Person' />
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <SearchBar></SearchBar>
                        </Row>
                    </Container>
                    <ListGroup>
                        <ListGroup.Item action routerLink="/event">
                            <Row>
                                <Col xs={1}>
                                    <Image src={HackBeanpot} thumbnail="true" alt="hackbeanpot" />
                                </Col>
                                <Col xs={11}>
                                    <h1>HackBeanpot</h1>
                                    <p>Feb 7-9</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={alertClicked}>
                            <Row>
                                <Col xs={1}>
                                    <Image src={CommunityGameJam} thumbnail="true" alt="CommunityGameJam" />
                                </Col>
                                <Col xs={11}>
                                    <h1>Community Game Jam</h1>
                                    <p>Feb 15-16</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item action onClick={alertClicked}>
                            <Row>
                                <Col xs={1}>
                                    <Image src={HackNYU} thumbnail="true" alt="HackNYU" />
                                </Col>
                                <Col xs={11}>
                                    <h1>HackNYU</h1>
                                    <p>Feb 15-17</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>

                    </ListGroup>

                    <div class="bottomright">
                        <button class="btn btn-primary">
                            <Octicon icon={Plus} size='small' ariaLabel='Plus' />
                        </button>
                    </div>

                </body>
            </html>
        );
    }
}

export default Home;