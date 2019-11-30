import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/Home.css'
import '../Stylesheets/ideas.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Image from 'react-bootstrap/Image'
import SearchBar from '../Pages/SearchBar'
import HackBeanpot from '../Images/hbp-logo.png';
import CommunityGameJam from '../Images/cgj-logo.png';
import HackNYU from '../Images/hnyu-logo.jpg';
import Octicon, { Person, Plus, ArrowLeft } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



class Ideas extends Component {
    render() {
        function alertClicked() {
            alert('Pretend this works ;)');
        }


        return (
            <React.Fragment>

                <Row>
                    <Col >
                        <button class="btn btn-primary" routerLink="/home">
                            <Octicon icon={ArrowLeft} size='small' ariaLabel='arrow' />
                        </button>
                    </Col>
                    <Col >
                        <Tabs defaultActiveKey="ideas">
                            <Tab eventKey="event" title="Event">

                            </Tab>
                            <Tab eventKey="ideas" title="Ideas">

                            </Tab>
                            <Tab eventKey="attendees" title="Attendees">

                            </Tab>
                        </Tabs>
                    </Col>
                    <Col />
                </Row>
                <Row>
                    <SearchBar />
                </Row>
                <ListGroup>
                    <ListGroup.Item action href="/event">
                        <Row>
                            <Col xs={6}>
                            <h1>Salem</h1>    
                            </Col>
                            <Col xs={3}>
                                <p class="pideas">Hidden role card game </p>
                            </Col>
                            <Col xs={3}>
                                <p class="pideas">Members: 2/4</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={alertClicked}>
                    <Row>
                            <Col xs={6}>
                            <h1>Loot</h1>    
                            </Col>
                            <Col xs={3}>
                                <p class="pideas">Generate terrain and find treasure</p>
                            </Col>
                            <Col xs={3}>
                                <p class="pideas">Members: 1/4</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item action onClick={alertClicked}>
                    <Row>
                            <Col xs={6}>
                            <h1>No More Geeses</h1>    
                            </Col>
                            <Col xs={3}>
                                <p class="pideas">Please, help us with the geese</p>
                            </Col>
                            <Col xs={3}>
                                <p class="pideas">Members: 3/4</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                </ListGroup>

                <div class="bottomright">
                    {/*<button class="btn btn-primary">*/}
                    {/*    <Octicon icon={Plus} size='small' ariaLabel='Plus' />*/}
                    {/*</button>*/}
                    <Button className="btn btn-primary" href="create-event">
                        <Octicon icon={Plus} size='small' ariaLabel='Plus' />
                    </Button>
                </div>


            </React.Fragment>
        );
    }
}

export default Ideas;