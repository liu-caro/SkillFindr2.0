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
import Loader from "react-loader-spinner";



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
        const { events } = this.state;
        return events.length ?
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
                    {this.state.events.map( event =>
                        <Link key={event.id} style={{ textDecoration: 'none', color: 'black' }} to={{
                            pathname: '/event',
                            state: {
                                eventName: event.text.eventName,
                                location: event.text.location,
                                startDate: event.text.startDate,
                                startTime: event.text.startTime,
                                endDate: event.text.endDate,
                                endTime: event.text.endTime,
                                descrip: event.text.descrip,
                                attendees: event.text.attendees,
                                eventId: event.id,
                                imageURL: event.text.imageURL
                            }
                        }}>
                            <ListGroup.Item >
                                <Row>
                                    <Col xs={1}>
                                        <Image src={event.text.imageURL || "https://via.placeholder.com/400x300"} thumbnail="true" alt="hackbeanpot" />
                                    </Col>
                                    <Col xs={11}>
                                        <h1>{event.text.eventName}</h1>
                                        <p className="pdes">{event.text.startDate} to {event.text.endDate}</p>
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

            </React.Fragment> : (
                <div className="loader">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={80}
                        width={80}
                    />
                </div>


        );
    }
}

export default Home;