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
                console.log("Aquí entra")

                let lu = data.map((task, index) => {
                    var color;
                    switch (task.prioridad) {
                        case "alta":
                            color = "badge badge-pill badge-success"
                            break;
                        case "media":
                            color = "badge badge-pill badge-warning"
                            break;
                        case "baja":
                            color = "badge badge-pill badge-danger"
                            break;
                    }
                    var badge = <span className={color}>{task.prioridad}</span>;
                    return (
                        <Col xs="4">
                            <Task key={index} badge={badge} tema={task.tema} prioridad={task.prioridad} fecha={task.fecha} texto={task.texto} />
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

