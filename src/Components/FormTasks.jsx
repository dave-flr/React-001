import React, { Component } from 'react';
import {
    Card,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    FormGroup,
    Label,
    Form
} from 'reactstrap';
import '../index.css';


export default class FormTasks extends Component {
    render() {
        return (
            <div>
                <Form className="form-task">
                    <FormGroup>
                        <Input type="email" name="email" id="titulo" placeholder="Título" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="descripcion" placeholder="Descripción" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="select" id="fecha">
                        <option> Baja </option>
                        <option> Media </option>
                        <option> Alta </option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                        />
                    </FormGroup>

                </Form>
            </div>
        );
    }
}