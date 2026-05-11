import React from "react";
import {Container, Row, Col, Card} from 'react-bootstrap';
import { useDataHook } from "../hook/useDataHook";

import { LoadingSpinner } from "../components/Spinner";

export function Home() {
    const {users, todos, error, loading} = useDataHook();

    if(loading) return <LoadingSpinner />;
    if(error) return <p>{error}</p>

    const userCount = users.length;
    const todoCount = todos.length;

    const inCompleTodos = todos.filter( inComplete => inComplete.completed == false).length;
    const completedTodos = todoCount - inCompleTodos; 


    return (
        <section id="home">
            <Container fluid>
                <div className="title-holder">
                    <h2>Dashboard</h2>
                </div>
                <Row>
                    <Col sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Users</Card.Title>
                                <Card.Text>{userCount}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}><Card>
                            <Card.Body>
                                <Card.Title>ToDo</Card.Title>
                                <Card.Text>{todoCount}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Completed Todo</Card.Title>
                                <Card.Text>{completedTodos}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>In Complete Todo</Card.Title>
                                <Card.Text>{inCompleTodos}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}