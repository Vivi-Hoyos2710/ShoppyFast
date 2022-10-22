import React from "react"
import { Link,useNavigate } from "react-router-dom";
import { FormGroup, Input, Label, Button, Container, Col, Row, Badge } from "reactstrap"
import { BsFillCartFill } from "react-icons/bs";
const SearchBar = ({ searchVar, setSearchVar, cantidad }) => {
    const navegar=useNavigate();
    const obtenerEntrada = (entrada) => {
        
            setSearchVar(entrada);}
    const enviarEntrada = () => {
        console.log(searchVar);
        if (typeof parseInt(searchVar) === 'number' && searchVar!=="" && searchVar!==null) {
            
            const url="/producto/"+searchVar
            console.log(url);
            navegar(url);
        }
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
            <form>
                <FormGroup>
                    <Label for="Search">

                    </Label>
                    <Input
                        style={styleObj}
                        id="Search"
                        name="search"
                        placeholder="Busca por código"
                        type="number"
                        onChange={e => obtenerEntrada(e.target.value)}
                    />
                    <Label></Label>

                </FormGroup>
                <Container className="">
                        <Button color="danger" onClick={() => { enviarEntrada() }}>Buscar</Button>
                </Container>


            </form>
        </Container>
    )
}
export default SearchBar