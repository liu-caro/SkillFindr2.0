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
import Octicon, { Person, Plus } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';
import Firebase from "../firebase";
import {Link} from "react-router-dom";
import Badge from "react-bootstrap/Badge";



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount(){
        /* Create reference to messages in Firebase Database */
        let eventsRef = Firebase.database().ref('events').orderByKey().limitToLast(100);
        eventsRef.on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let event = { text: snapshot.val(), id: snapshot.key };
            this.setState({ events: [event].concat(this.state.events) });
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid="true">
                        <Row className="titlePadding">
                        <Col xs={6}>
                            <h2>Upcoming Events</h2>
                        </Col>
                        <Col xs={6}>
                            <div className="float-right">
                                <Button type="button" href="/profile">
                                    <Octicon icon={Person} size='medium' ariaLabel='Person' />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <SearchBar/>
                    </Row>
                </Container>
                
                <ListGroup>
                    <ListGroup.Item action href="/event">
                        <Row>
                            <Col xs={1}>
                                <Image src={HackBeanpot} thumbnail="true" alt="hackbeanpot" />
                                <div className="sub">LOCATION</div>
                            </Col>
                            <Col xs={11}>
                                <h1>HackBeanpot</h1>
                                <p className="pdes">Feb 7-9</p>

                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col xs={1}>
                                <Image src={CommunityGameJam} thumbnail="true" alt="CommunityGameJam" />
                            </Col>
                            <Col xs={11}>
                                <h1>Community Game Jam</h1>
                                <p className="pdes">Feb 15-16</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col xs={1}>
                                <Image src={HackNYU} thumbnail="true" alt="HackNYU" />
                            </Col>
                            <Col xs={11}>
                                <h1>HackNYU</h1>
                                <p className="pdes">Feb 15-17</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    {this.state.events.map( event =>
                        <Link key={event.id} style={{ textDecoration: 'none', color: 'black' }} to={{
                            pathname: '/event'
                            // state: {
                            //     ideaName: idea.text.ideaName,
                            //     descrip: idea.text.descrip,
                            //     teamSize: idea.text.teamSize,
                            //     skills: idea.text.skills.split(', '),
                            //     role: idea.text.role
                            // }
                        }}>
                            <ListGroup.Item >
                                <Row>
                                    <Col xs={1}>
                                        <Image src={HackBeanpot} thumbnail="true" alt="hackbeanpot" />
                                    </Col>
                                    <Col xs={11}>
                                        <h1>{event.text.eventName}</h1>
                                        <p>{event.text.startDate}-{event.text.endDate}</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Link>

                    )
                    }

                </ListGroup>

                <div className="bottomright">
                    <Button href="create-event">
                        <Octicon icon={Plus} size='medium' ariaLabel='Plus'/>
                    </Button>
                </div>

            </React.Fragment>


        );
    }
}

export default Home;