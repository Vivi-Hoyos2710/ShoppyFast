import React, { useState } from "react";
import {FormGroup, Label, Form, Container, Row, Col, Button, } from "reactstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inicioSesion } from "../../Services/AdminServices";
import '../../Estilos/Style.css';
import { BsFillEyeFill} from "react-icons/bs";

const Login = () => {
    
    const [passwordShown, setPasswordShown] = useState(false);
    const userSchema = yup.object().shape({
        email: yup.string().email("No es un email valido").required("Campo de email vacio"),
        password: yup.string().required("Campo de contraseña vacio").matches(/^[a-zA-Z0-9@]+$/,"Este campo no puede tener simbolos ni espacios en blanco"
          ),
    });
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const {register,handleSubmit,reset,formState: { errors },} = useForm({
        resolver: yupResolver(userSchema),
    });

    const ingresoAdmin = (data) => {
        const loginAsincrono=async()=>{
            const err=await inicioSesion(data.email,data.password);
            
        }
        loginAsincrono();
    };

    const styleObj = {
        width: "100%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };

    return (
        <Container style={{marginTop: '70px',marginLeft:"20%"}} >
            <Form onSubmit={handleSubmit(ingresoAdmin)}>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col>
                                <Label>Correo Electrónico</Label>
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
                </Row>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col xs="3">
                                <Label>Contraseña</Label>
                            </Col>
                            <input 
                            style={styleObj}
                            type={passwordShown ? "text" : "password"}
                             {...register("password")} />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["password"] ? errors["password"].message : ""}
                        </Label>
                        
                    </Col>
                </Row>  
                </Form>
                <Container>
            <button style={{borderRadius: "10px",height: "30px",width: "70px",marginLeft:"40%"}}onClick={togglePassword}> Ver <BsFillEyeFill/></button>
            </Container>
                <Form onSubmit={handleSubmit(ingresoAdmin)}>
                <Row>
                    <Col xs="6">
                        <Col xs="3">
                            <Label>
                                <br />
                            </Label>
                        </Col>
                        <Button type="submit">Ingresar</Button>
                    </Col>
                </Row>
                </Form>

           
        </Container>
    );
};

export default Login;