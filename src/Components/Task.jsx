import React, { Component } from 'react';
import {
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBody,
    CardTitle,
    CardText,
    Badge
} from 'reactstrap';


class Task extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (

            <div>
                <Card>
                    <CardHeader> 
                        <CardTitle> { this.props.tema } </CardTitle>
                        <p> { this.props.prioridad } </p>
                    </CardHeader>
                    <CardBody>
                        <CardText> { this.props.fecha } </CardText>
                        <CardText> { this.props.texto } </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button outline color="danger"> Eliminar </Button>
                    </CardFooter>
                </Card>
            </div>

        )
    }
};



export default Task;