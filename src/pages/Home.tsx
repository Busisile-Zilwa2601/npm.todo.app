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
                    <hr />
                </div>
                <Row>
                    <Col sm={3}>
                        <Card className="info-DashboardCard">
                            <Card.Body>
                                <Card.Title>Users <span className="icon-span"><i className="fa-regular fa-user"></i></span></Card.Title>
                                <Card.Text>{userCount}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="info-DashboardCard">
                            <Card.Body>
                                <Card.Title>ToDo <span className="icon-span"><i className="fa-solid fa-list"></i></span></Card.Title>
                                <Card.Text>{todoCount}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="info-DashboardCard">
                            <Card.Body>
                                <Card.Title>Completed Todo <span className="icon-span"><i className="fa-solid fa-clipboard-check"></i></span></Card.Title>
                                <Card.Text>{completedTodos}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="info-DashboardCard">
                            <Card.Body>
                                <Card.Title>In Complete Todo <span className="icon-span"><i className="fa-regular fa-calendar-check"></i></span></Card.Title>
                                <Card.Text>{inCompleTodos}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}