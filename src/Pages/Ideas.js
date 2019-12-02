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



class Ideas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ideas: []
        };
    }

    componentWillMount(){
        /* Create reference to messages in Firebase Database */
        let ideasRef = Firebase.database().ref('ideas').orderByKey().limitToLast(100);
        ideasRef.on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let idea = { text: snapshot.val(), id: snapshot.key };
            this.setState({ ideas: [idea].concat(this.state.ideas) });
        })
    }

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
                    <ListGroup.Item action href="/idea-details">
                        <Row>
                            <Col xs={10}>
                                <h1 className="title">Salem</h1>
                            </Col>
                            
                            <Col xs={2}>
                                <Badge className="float-right m-2" pill="true" variant="primary">Members: 2/4</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <h2 className="subtitle">
                                Hidden role card game
                            </h2>
                        </Row>
                    </ListGroup.Item>
                    
                    <ListGroup.Item action onClick={alertClicked}>
                        <Row>
                            <Col xs={10}>
                                <h1 className="title">Loot</h1>
                            </Col>
    
                            <Col xs={2}>
                                <Badge className="float-right m-2" pill="true" variant="primary">Members: 1/4</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <h2 className="subtitle">
                               Generate terrain and find treasure
                            </h2>
                        </Row>
                    </ListGroup.Item>


                    <ListGroup.Item action onClick={alertClicked}>
                        <Row>
                            <Col xs={10}>
                                <h1 className="title">No More Geeses</h1>
                            </Col>

                            <Col xs={2}>
                                <Badge className="float-right m-2" pill="true" variant="primary">Members: 3/4</Badge>
                            </Col>
                        </Row>

                        <Row>
                            <h2 className="subtitle">
                                Please, help us with the geese
                            </h2>
                        </Row>
                    </ListGroup.Item>

                    { /* Render the list of messages */
                        this.state.ideas.map( idea =>
                            <ListGroup.Item key={idea.id} action onClick={alertClicked}>
                                <Row>
                                    <Col xs={10}>
                                        <h1 className="title">{idea.text.ideaName}</h1>

                                    </Col>

                                    <Col xs={2}>
                                        <Badge className="float-right m-2" pill="true" variant="primary">Members: 1/{idea.text.teamSize}</Badge>
                                    </Col>
                                </Row>

                                <Row>
                                    <h2 className="subtitle">
                                        {idea.text.descrip}

                                    </h2>
                                </Row>
                            </ListGroup.Item>

                        )
                    }

                </ListGroup>

                <div className="bottomright">
                    <Button href="create-idea">
                        <Octicon icon={Plus} size='medium' ariaLabel='Plus' />
                    </Button>
                </div>

            </React.Fragment>


        );
    }
}

export default Ideas;