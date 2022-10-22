import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {FormGroup,Label,Form,Container,Row,Col,Button} from "reactstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UserForm = ({ setInfoUser, infoUsuario }) => {
    const userSchema = yup.object().shape({
        name: yup.string().required("Campo de nombre vacio"),
        surname: yup.string().required("Campo de apellido vacio"),
        document:yup.number("Debe ser un valor numerico").typeError("Campo de cedula vacio").max(15,"La cedula no puede ser mayor a 15 caracteres").positive("No puede ser un número negativo").integer("Debe ser entero"),
        number: yup.number("Debe ser un valor numerico").typeError("Campo de cantidad del producto vacio").max(15,"El número no puede ser mayor a 15 caracteres").positive("No puede ser un número negativo").integer("Debe ser entero"),
        email: yup.string().email("No es un email valido").required("Campo de email vacio"),
        check:yup.bool(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    const navigate = useNavigate();

    const crearUsuario = (data) => {
        console.log(data);
        setInfoUser(data);
        navigate("/factura");
    };

    const styleObj = {
        width: "80%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };

    return (
        <Container style={{ marginTop: '70px' }}>
            <Form onSubmit={handleSubmit(crearUsuario)}>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Nombre</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="name"
                                name="Nombre"
                                type="text"
                                {...register("name")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["name"] ? errors["name"].message : ""}</Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Apellidos</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="surnameInput"
                                name="Apellidos"
                                type="text"
                                {...register("surname")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["surname"] ? errors["surname"].message : ""}</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Cedula</Label>
                            </Col>
                            <input style={styleObj} type="number" {...register("document")} />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["document"] ? errors["document"].message : ""}
                        </Label>
                    </Col>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Número de celular</Label>
                            </Col>
                            <input style={styleObj} type="number" {...register("number")} />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["number"] ? errors["number"].message : ""}</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>E-mail</Label>
                            </Col>
                            <input
                                style={styleObj}
                                id="emailInput"
                                name="E-mail"
                                type="text"
                                {...register("email")}
                            />
                        </FormGroup>
                        <Label style={{ color: "red" }}> {errors["email"] ? errors["email"].message : ""}</Label>

                    </Col>

                    <Col xs="6">
                        <Col xs="3">
                            <Label>
                                <br />
                            </Label>
                        </Col>
                        <Button type="submit">Mostrar Factura</Button>
                    </Col>
                    <Col>
                        <Label>¿Desea recibir la factura por correo electrónico?  </Label><input addon aria-label="Checkbox for following text input" type="checkbox" {...register("check")}/>
                    </Col>
                </Row>

                <Row style={{ marginTop: "30px" }}>
                    <Col>
                        <Link to="/carrito">
                            <Button color="danger">Volver</Button>
                        </Link>
                    </Col>
                </Row>

            </Form>
        </Container>
    );
};

export default UserForm;