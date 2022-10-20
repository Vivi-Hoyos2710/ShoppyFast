import React, { useState } from "react";
import { Input, FormGroup, Label, Form, Container, Row, Col, Button, } from "reactstrap";
import * as yup from "yup";
import { set, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { inicioSesion } from "../../Services/AdminServices";
import '../../Estilos/Style.css';

const Login = () => {
    const [hayError,setHayerror]=useState(false);
    const [errores,setErrores]=useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const userSchema = yup.object().shape({
        email: yup.string().email("No es un email valido").required("Campo de email vacio"),
        password: yup.string().required("Campo de contraseña vacio"),
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
            console.log(err);
            setHayerror(true);
            setErrores(err.message);
        }
        loginAsincrono();
    };

    const styleObj = {
        width: "80%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };

    if (hayError) {
        
        setHayerror(false);}

    return (
        <Container className='container_table' style={{ marginTop: "70px" }}>
            <Form onSubmit={handleSubmit(ingresoAdmin)}>
                <Row>
                    <Col xs="6">
                        <FormGroup>
                            <Col>
                                <Label>Correo Electrónico</Label>
                            </Col>
                            <input
                                
                                style={{styleObj,width: "370px",borderRadius: "10px",height: "40px"}}
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
                            style={{styleObj,width: "370px",borderRadius: "10px",height: "40px"}}
                            type={passwordShown ? "text" : "password"}
                             {...register("password")} />
                        </FormGroup>
                        <Label style={{ color: "red" }}>
                            {errors["password"] ? errors["password"].message : ""}
                        </Label>
                        
                    </Col>
                </Row>
                <button style={{borderRadius: "10px",height: "30px",width: "120px",marginLeft:"250px"}}onClick={togglePassword}>Ver contraseña</button>
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