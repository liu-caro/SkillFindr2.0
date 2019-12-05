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
import Octicon, { Plus, ArrowLeft, Person } from '@primer/octicons-react';
import Button from 'react-bootstrap/Button';
import Firebase from "../firebase";
import {Link} from "react-router-dom";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



class Ideas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ideas: []
        };
    }

    componentDidMount(){
        /* Create reference to messages in Firebase Database */
        let ideasRef = Firebase.database().ref('ideas').orderByKey().limitToLast(100);
        ideasRef.on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let idea = { text: snapshot.val(), id: snapshot.key };
            this.setState({ ideas: [idea].concat(this.state.ideas) });
        })
    }

    render() {
        const { ideas } = this.state;
        return ideas.length ?
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

                    <Col>
                        <div className="float-right">
                            <Button type="button" href="/profile">
                                <Octicon icon={Person} size='medium' ariaLabel='Person' />
                            </Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <SearchBar />
                </Row>
            </Container>

            <ListGroup>
                {this.state.ideas.map( idea =>
                    <Link key={idea.id} style={{ textDecoration: 'none', color: 'black' }} to={{
                        pathname: '/idea-details',
                        state: {
                            ideaName: idea.text.ideaName,
                            descrip: idea.text.descrip,
                            teamSize: idea.text.teamSize,
                            skills: idea.text.skills.split(', '),
                            role: idea.text.role
                        }
                    }}>
                        <ListGroup.Item >
                            <Row>
                                <Col xs={10}>
                                    <h1 className="title">{idea.text.ideaName}</h1>

                                </Col>

                                <Col xs={2}>
                                    <Badge className="float-right m-2" pill="true" variant="primary">
                                        Members: {idea.text.members}/{idea.text.teamSize}
                                    </Badge>
                                </Col>
                            </Row>

                            <Row>
                                <h2 className="subtitle">
                                    {idea.text.descrip}

                                </h2>
                            </Row>
                        </ListGroup.Item>
                    </Link>

                )
                }

            </ListGroup>

            <div className="bottomright">
                <Button href="create-idea">
                    <Octicon icon={Plus} size='medium' ariaLabel='Plus' />
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

export default Ideas;