import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Input, FormGroup, Label, Form, Container, Row, Col , Button } from 'reactstrap';
import { userSchema } from "../Validations/UserValidation";

const UserForm = ({setInfoUser,infoUsuario}) => {
    
    const navigate = useNavigate();
    const crearUsuario = async (event) => {
        event.preventDefault(); //Cancela el evento de submit si hay errores en formulario.
        let formData = {
            name: event.target[0].value,
            surname: event.target[1].value,
            document: event.target[2].value,
            number: event.target[3].value,
            email: event.target[4].value,
        };
        const esquema= await userSchema.validate(formData).catch((err) => {
            console.log(err.errors);
          });
        const isValid = await userSchema.isValid(formData);
        console.log(isValid);
        if (isValid) {
            setInfoUser(formData);
            navigate('/factura');
        }

    }
    return (
        <Container className="">
            <Form onSubmit={crearUsuario}>
                <Row>
                    <Col xs="6">
                        <FormGroup >
                            <Col xs="3">
                                <Label>
                                    Nombre
                                </Label>
                            </Col>
                            <Input
                                className="formUser"
                                id="nameInput"
                                name="Nombre"
                                type='text'
                            />
                        </FormGroup>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>
                                    Apellidos
                                </Label>
                            </Col>
                            <Input
                                id="surnameInput"
                                name="Apellidos"
                                type='text'
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    
                
                <Col xs="6">
                <FormGroup>
                <Col xs="3">
                    <Label>
                        Cedula
                    </Label>
                </Col>
                    <Input
                        type='number'
                    />
                </FormGroup>
                </Col>
                <Col xs="6">
                <FormGroup>
                <Col xs="3">
                    <Label>
                        Número de celular
                    </Label>
                </Col> 
                    <Input
                        type='number'
                    />
                    
                </FormGroup>
                </Col>
                </Row>
                <Row> 
                <Col xs="6">
                <FormGroup>
                <Col xs="3">
                    <Label>
                        E-mail
                    </Label>
                </Col>
                    <Input 
                        id="emailInput"
                        name="E-mail"
                        type='text'
                    />
                </FormGroup>
                </Col>
                <Col xs="6">
                <Col xs="3">
                    <Label>
                        <br/>
                    </Label>
                </Col>
                <Button  type='submit' >Mostrar Factura</Button>
                </Col>
                </Row> 
                
            </Form>
        </Container>
    )
}

export default UserForm