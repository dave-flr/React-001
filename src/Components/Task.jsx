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
                <Card className="task">
                    <CardHeader> 
                        <CardTitle> { this.props.tema } </CardTitle>
                        {this.props.badge}
                    </CardHeader>
                    <CardBody>
                        <CardText> { this.props.fecha } </CardText>
                        <CardText> { this.props.texto } </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button color="danger"> Eliminar </Button>
                    </CardFooter>
                </Card>
            </div>

        )
    }
};



export default Task;