import React from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, FormGroup, Label, Form, Container, Row, Col, Button } from "reactstrap";
import {Link } from "react-router-dom";
import { crearcupon } from '../../Services/AdminServices';
const CrearCupon = () => {

    const userSchema = yup.object().shape({
        codigo_cupon: yup.string().max(100).matches(/^[aA-zZ\s]+$/, "Solo se pueden ingresar letras").required("Campo de nombre vacio"),
        descuento: yup.number("Debe ser un valor numérico").typeError('Campo de descuento vacio').positive("No puede ser un número negativo").integer("Debe ser entero"),
        
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    const styleObj = {
        width: "80%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };
    const crearCupon = (data) => {
        console.log(data);
        crearcupon(data.codigo_cupon,data.descuento);
        
    };
  return (
    <Container style={{marginTop: '70px',marginLeft:"5%"}}>
            <Form onSubmit={handleSubmit(crearCupon)}>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Código de Cupón</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="codigo_cupon"
                                name="codigo_cupon"
                                {...register("codigo_cupon")}
                                
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["codigo_cupon"] ? errors["codigo_cupon"].message : ""}</Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Descuento</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="descuento"
                                name="descuento"
                                type="descuento"
                                {...register("descuento")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["descuento"] ? errors["descuento"].message : ""}</Label>
                    </Col>
                </Row>
                <Row>
                <Col xs="6">
                        <Col xs="3">
                            <Label>
                                <br />
                            </Label>
                        </Col>
                        <Button color="primary" type="submit">Crear Cupón</Button>
                    </Col>
                </Row>
                <Row style={{ margin: "70px" }}>
                    <Col>
                        <Link to="/listacupones">
                            <Button color="danger">Volver</Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </Container>
  )
}

export default CrearCupon;
