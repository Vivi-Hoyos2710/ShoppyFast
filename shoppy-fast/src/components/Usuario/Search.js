import React from "react"
import { Link,useNavigate } from "react-router-dom";
import { FormGroup, Input, Label, Button, Container, Col, Row, Badge } from "reactstrap"
import { BsFillCartFill } from "react-icons/bs";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const SearchBar = ({cantidad }) => {
    const navegar=useNavigate();
    const userSchema = yup.object().shape({
        number: yup.number("Debe ser un valor numerico").typeError("Adelante,ingresa un código válido").positive("No puede ser un número negativo").integer("Debe ser entero"),
        
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    
    const obtenerEntrada = (entrada) => {
        console.log(entrada);
        navegar('/producto/'+entrada.number);
          
    }
    const styleObj = {
        width: "90%",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid gray"
    };
    return (
        <Container style={{ margin: '5%', marginTop: '10%' }}>
            <Row>
                <Col xs="6"> <h1>Bienvenido a ShoppyFast</h1></Col>
                <Col xs="3"><span></span></Col>
                <Col xs="2" >
                    <Link to="/carrito">
                        <Button xs="3" sm="6" color="primary" ><Label xs={0}>Ve al carrito</Label><BsFillCartFill />
                            <Badge>{cantidad}</Badge>
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row xs={11}><h3>Empecemos ingresando el código de tu producto</h3></Row>
            <form onSubmit={handleSubmit(obtenerEntrada)}>
                <FormGroup>
                    <input
                        style={styleObj}
                        id="Search"
                        name="search"
                        placeholder="Busca por código"
                        type="number"
                        {...register("number")}
                        
                    />
                     <Label style={{ color: "red" }}> {errors["number"] ? errors["number"].message : ""}</Label>
                </FormGroup>
                <Container>
                        <Button color="danger" type="submit">Buscar</Button>
                </Container>


            </form>
        </Container>
    )
}
export default SearchBar