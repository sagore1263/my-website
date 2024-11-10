import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Modal, Form } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import crest from './assets/react.svg'
import Layout from "./Layout.jsx"

function Tasks(props) {
    const[tasks, setTasks]=useState([])
    const [show, setShow] = useState(false)
    const [title, setTitle]=useState('')
    const [taskDesc, setTaskDesc] = useState('')

    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
        setTitle('');
        setTaskDesc('');
    };

    function handleSubmit(){
        const newTask = {
            title: title,
            desc: taskDesc,
            id: tasks.length + 1,
        };
        setTasks([...tasks, newTask])
        setShow(true)
        handleClose()
    }

    function handleDone(taskId){
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    return (
        <Container>
         <Layout />
         <div className="add-task-btn-container">
                <Button className="add-task-btn" onClick={handleShow}>+ Add Task</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTaskTitle">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter task title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTaskDesc" className="mt-3">
                            <Form.Label>Task Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter task description"
                                value={taskDesc}
                                onChange={(e) => setTaskDesc(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Add Task</Button>
                </Modal.Footer>
            </Modal>

         <Row xs={1} md={2} lg={3} className="g-4">
            {
                tasks.map(task =>{
                    return <Col key={task.id}>
                         <Card className="task-card">
                            <Card.Body>
                                <Card.Title>Title: {task.title}</Card.Title>
                                <Card.Text>Description: {task.desc}</Card.Text>
                            <Button variant="primary" onClick={() => handleDone(task.id)}>Mark as Done</Button>
                            </Card.Body>
                         </Card>
                    </Col>
                })
            }
            
            </Row>
        </Container>
    )
    }
export default Tasks;
