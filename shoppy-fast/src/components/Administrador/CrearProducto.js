import React, { useState } from "react";
import {Link } from "react-router-dom";
import { Alert, FormGroup, Label, Form, Container, Row, Col, Button } from "reactstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { crearProducto } from "../../Services/AdminServices";

const CrearProducto = () => {
    const [error, setError] = useState("");

    //validaciones de yup
    const userSchema = yup.object().shape({
        id: yup.number("Debe ser un valor numérico").typeError('Está vacio, aquí debe ir un valor numérico para el id').positive("No puede ser un número negativo").integer("Debe ser entero"),
        name: yup.string().max(100).required("Campo de nombre vacio"),
        marca: yup.string().max(100).required("Campo de marca vacio"),
        description: yup.string().required("Campo de descripción vacio"),
        price: yup.number("Debe ser un valor numérico").typeError("Campo de precio vacio").positive("No puede ser un número negativo").integer("Debe ser entero"),
        imgURL: yup.string().required("Campo de url de imagen vacio"),
        cantidad: yup.number("Debe ser un valor numérico").typeError("Campo de cantidad del producto vacio").positive("No puede ser un número negativo").integer("Debe ser entero"),
    });



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });



    const crearProduct = (data) => {
        const DatosProducto = {
            id: data.id,
            name: data.name,
            marca: data.marca,
            description: data.description,
            price: data.price,
            imgURL: data.imgURL,
            cantidad: data.cantidad,
        }
        const enviarProducto = async () => {
            const datos = await crearProducto(DatosProducto);
            if (datos) {
                setError(datos);
            }
        }
        enviarProducto();


    };
    const styleObj = {
        width: "80%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };

    return (
        <Container style={{marginTop: '70px',marginLeft:"5%"}}>
            <Form onSubmit={handleSubmit(crearProduct)}>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Código Producto</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="id"
                                name="id"
                                type="number"
                                {...register("id")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["id"] ? errors["id"].message : ""}</Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Nombre Producto</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="name"
                                name="name"
                                type="text"
                                {...register("name")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["name"] ? errors["name"].message : ""}</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Marca</Label>
                            </Col>
                            <input
                                style={styleObj}
                                type="text"
                                {...register("marca")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["marca"] ? errors["marca"].message : ""}
                        </Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Descripción</Label>
                            </Col>
                            <input
                                style={styleObj}
                                type="text"
                                {...register("description")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["description"] ? errors["description"].message : ""}</Label>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Precio</Label>
                            </Col>
                            <input
                                style={styleObj}
                                type="number"
                                {...register("price")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["price"] ? errors["price"].message : ""}
                        </Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Url imagen</Label>
                            </Col>
                            <input
                                style={styleObj}
                                type="text"
                                {...register("imgURL")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["imgURL"] ? errors["imgURL"].message : ""}</Label>
                    </Col>
                </Row>

                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Cantidad</Label>
                            </Col>
                            <input
                                style={styleObj}
                                type="number"
                                {...register("cantidad")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["cantidad"] ? errors["cantidad"].message : ""}
                        </Label>
                    </Col>
                    <Col xs="6">
                        <Col xs="3">
                            <Label>
                                <br />
                            </Label>
                        </Col>
                        <Button color="primary" type="submit">Crear Producto</Button>
                    </Col>
                </Row>
                <Row>
                    {error !== "" ? <Alert color="danger">{"Error: " + error}</Alert> : ""}
                </Row>
                <Row style={{ margin: "25px" }}>
                    <Col>
                        <Link to="/inventario">
                            <Button>Volver</Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};


export default CrearProducto;


