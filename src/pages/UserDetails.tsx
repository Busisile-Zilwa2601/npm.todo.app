import { useState } from 'react';
import {Container, Row, Col, Card, CardBody, Button} from 'react-bootstrap';

import { useAppContext } from "../context/AppContext";
import { useDataHook } from "../hook/useDataHook";

import { LoadingSpinner } from "../components/Spinner";
import { Modal } from '../components/Modal';
import { TodoList } from '../components/UserTodoList';
import { ITodo } from '../types/ITodo';

export const UserDetails: React.FC = () => {
    const [showTodos, setShowTodos] = useState(false);
    const { selectedUser } = useAppContext();
    const { userTodos, error, loading} = useDataHook();

    if(loading) return <LoadingSpinner />;
    if(error) return <p>{error}</p>;

    function openModal(){
        setShowTodos(true);
    }

    return(
        <div>
            <h5>Details</h5>
            <Container fluid className=''>
                <div className='row justify-content-center use-details'>
                    <div className='col-4'>
                        <Card border='info' className='user-details-card'>
                            <Card.Header>{selectedUser?.name}</Card.Header>
                                <Card.Body>
                                    <ul className="list-group list-group-flush mb-3">
                                        <li className="list-group-item"><strong>Username: </strong> {selectedUser?.username}</li>
                                        <li className="list-group-item"><strong>Email: </strong> {selectedUser?.email}</li>
                                        <li className="list-group-item"><strong>Phone: </strong> {selectedUser?.phone}</li>
                                        <li className="list-group-item"><strong>Website: </strong> {selectedUser?.website}</li>
                                    </ul>
                                </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card border='info' className='user-details-card'>
                            <Card.Header>Address</Card.Header>
                            <Card.Body>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item"><strong>Street: </strong>{selectedUser?.address.street}</li>
                                    <li className="list-group-item"><strong>City: </strong>{selectedUser?.address.city}</li>
                                    <li className="list-group-item"><strong>Suite: </strong>{selectedUser?.address.suite}</li>
                                    <li className="list-group-item"><strong>Code: </strong>{selectedUser?.address.zipcode}</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-4'>
                        <Card border='info' className='user-details-card'>
                            <Card.Header>Company</Card.Header>
                            <Card.Body>
                                <ul className="list-group list-group-flush mb-3">
                                    <li className="list-group-item"><strong>Name: </strong>{selectedUser?.company.name}</li>
                                    <li className="list-group-item"><strong>BS: </strong>{selectedUser?.company.bs}</li>
                                    <li className='list-group-item'><strong>Phrase: </strong>{selectedUser?.company.catchPhrase}</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='d-flex justify-content-end gap-2'>
                        <Button onClick={openModal}>View Todo</Button>
                    </div>
                </div>
                {
                    showTodos && (
                        <Modal onClose={()=> setShowTodos(false)}>
                            <TodoList todos={userTodos} />
                        </Modal>
                    )
                }
            </Container>

        </div>
    )
}