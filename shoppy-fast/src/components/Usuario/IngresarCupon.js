import React,{useState} from 'react'
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, FormGroup, Label, Form, Container, Row, Col, Button } from "reactstrap";
import {Link } from "react-router-dom";
import { BsFillEmojiSmileFill} from "react-icons/bs";
import { verificarCupon } from '../../Services/ProductInfoServices';

const IngresarCupon = ({setCupon}) => {
const [error,setError]=useState("");
const [succes,setSucces]=useState("");
    const userSchema = yup.object().shape({
        codigo_cupon: yup.string().max(100).required("Campo de nombre vacio"),
        
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
    const ingresarCupon = (data) => {
        console.log(data);
        const verificar = async () => {
            const respuesta= await verificarCupon(data.codigo_cupon);
            if (respuesta.hasOwnProperty("response")) {
                setError(respuesta.response.data.msg);
                setSucces("");
            }
            else{
                setCupon({
                    "codigo_cupon": data.codigo_cupon,
                    "descuento": respuesta.data,
                });
                setSucces("Válido, cupón del: "+respuesta.data+"%");
                setError("");
            }
        }
        verificar();
        
    };
return (
    <Container style={{marginTop: '70px',marginLeft:"5%"}}>
        <Col xs="8" style={{marginBottom: '30px'}}> <h3>Ingresa tu cupón de descuento, habrá cambios mágicos en tu total a pagar <BsFillEmojiSmileFill/></h3></Col>
            <Form onSubmit={handleSubmit(ingresarCupon)}>
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
                        {error !== "" ? <Alert color="danger">{"Error: " + error}</Alert> : ""}
                        {succes !== "" ? <Alert >{succes}</Alert> : ""}
                    </Col>
                    
                </Row>
                <Row>
                <Col xs="6">
                        <Col xs="3">
                            <Label>
                                <br />
                            </Label>
                        </Col>
                        <Button color="primary" type="submit">Ingresar</Button>
                    </Col>
                </Row>
                <Row style={{ margin: "70px" }}>
                    <Col>
                        <Link to="/carrito">
                            <Button color="danger">Volver</Button>
                        </Link>
                    </Col>
                </Row>
            </Form>
        </Container>
)
}

export default IngresarCupon;
