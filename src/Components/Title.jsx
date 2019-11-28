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

class Title extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav class="navbar navbar-dark bg-dark mb-3">
                <span class="navbar-brand mb-0 h1">Aplicación de lista de Tareas</span>
            </nav>
        )
    }
};

export default Title;