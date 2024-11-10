import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import './App.css';
import Layout from './Layout.jsx'
import WalletConnect from './WallectConnect.jsx';

function Tasks(props) {
    const tasks =  JSON.parse(sessionStorage.getItem("savedCatIds")) || [] // List of tasks
    const [show, setShow] = useState(false); // Modal visibility
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [bounty, setBounty] = useState('');
    const [date, setDate] = useState('');


    // Function to handle modal show/hide
    const handleShow = () => setShow(true);

    const handleClose = () => {
        setShow(false);
        setTaskTitle('');
        setTaskDesc('');
        setDate('');
        setBounty('');
    };

    // Function to add a new task
    const handleAddTask = () => {
        const newTask = {
            title: taskTitle,
            desc: taskDesc,
            bounty: bounty,
            date: date,
            id: tasks.length + 1,
        };
        let savedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds')) || [];
    savedCatIds.push(newTask);
    sessionStorage.setItem("savedCatIds", JSON.stringify(savedCatIds));
        handleClose();
        
        fetch(`18.119.109.239:5001/connect`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                body: { address: String, 
                    private_key: String }              
            })  
        }).then(res => {
            if (res.status === 200) {
                alert("You posted!")
                loadMessages()
                titleRef.current.value = ''
                contentRef.current.value = ''
            } 
        })
    };

    // Function to remove a task
    const handleMarkAsDone = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <Container className="my-4">
            <div style={{ display: 'flex', gap: '20px' }}>
            <Layout />
            </div>
            {/* Add Task Button */}
            <div className="add-task-btn-container mb-4">
                <Button className="add-task-btn" onClick={handleShow}>+ Add Task</Button>
            </div>
            
            {/* Task Cards */}
            <Row xs={1} md={2} lg={3} className="g-4">
                {tasks.map((task) => (
                    <Col key={task.id}>
                        <Card className="task-card">
                            <Card.Body>
                                <Card.Title className="task-card-title">Title: {task.title}</Card.Title>
                                <Card.Text className="task-card-desc">Description: {task.desc}</Card.Text>
                                <Card.Text className="task-card-bounty">Bounty: {task.bounty}</Card.Text>
                                <Card.Text className="task-card-dueDate">Due Date: {task.date}</Card.Text>
                                <Button variant="success" onClick={() => handleMarkAsDone(task.id)}>Mark as Done</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal for Adding a New Task */}
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
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
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
                        <Form.Group controlId="formTaskBounty" className="mt-3">
                            <Form.Label>Task Bounty</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter task bounty"
                                value={bounty}
                                onChange={(e) => setBounty(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDate" className="mt-3">
                            <Form.Label>Task Due Date</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter task due date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Tasks;