import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
    Input,
    FormGroup,
    Label,
    Form,
    Container,
    Row,
    Col,
    Button,
} from "reactstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const  CrearProducto = () => {
    const userSchema = yup.object().shape({
        id:yup.string().required("Campo de id vacio"),
        name:yup.string().max(100).required("Campo de nombre vacio"),
        marca:yup.string().max(100).required("Campo de marca vacio"),
        description: yup.string().required("Campo de descripción vacio vacio"),
        precio:yup.string().required("Campo de precio vacio"),
        imgURL:yup.string().required("Campo de url de imagen vacio"),
        cantidad:yup.string().required("Campo de cantidad del producto vacio"),
    });

    

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    const navigate = useNavigate();

    const crearProducto = (data) => {
        const DatosProducto={
            id:data.id,
            name:data.name,
            marca:data.marca,
            description:data.description,
            precio:data.precio,
            imgURL:data.imgURL,
            cantidad:data.cantidad,

            
        }
        console.log(DatosProducto);
        navigate("/inventario");
        
    };
    const styleObj = {
        width: "80%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };

    return (
        <Container style={{ marginTop: "70px" }}>
            <Form onSubmit={handleSubmit(crearProducto)}>
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
                            {...register("precio")}
                             />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["precio"] ? errors["precio"].message : ""}
                        </Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Url de la imagen</Label>
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


export default CrearProducto ;


