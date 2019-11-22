import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Badge
} from 'reactstrap';
import Task from './Task';



export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        }
    }

    componentDidMount() {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                console.log("Aqui entra")
                    
                    let lu = data.map((task, index) => {
                        return (
                            <Col xs="4">
                                <Task key={index} tema={task.tema} prioridad={task.prioridad} fecha={task.fecha} texto={task.texto} />
                            </Col>
                        );
                    });
                    this.setState({ taskList: lu });
                })
            .catch(console.log("Error"));
    }

    render() {
        return (
            <div>
                <Row>
                    {
                        this.state.taskList
                    }
                </Row>
            </div>
        );
    }
}

