import React from "react"
import { Link } from "react-router-dom";
import { FormGroup,Input,Label,Button, Container,Col,Row,Badge} from "reactstrap"
import { BsFillCartFill } from "react-icons/bs";
const SearchBar = ({searchVar,setSearchVar,cantidad}) => {
    const busqueda=(entrada)=>{
        setSearchVar(entrada);
    }
    return (
        <Container style={{marginTop:'5%'}}>
        <Row>
            <Col xs="6"> <h1>Bienvenido a ShoppyFast</h1></Col>
            <Col xs="4"><span></span></Col>
            <Col xs="2">
            <Link to="/carrito">
                <Button color="primary" >Ve al carrito<BsFillCartFill/>
                <Badge>{cantidad}</Badge>
                </Button>
            </Link>
            </Col>
        </Row>
        <Row><h3>Empecemos ingresando el código de tu producto</h3></Row>
        <form>
            <FormGroup>
                <Label for="Search">
                    
                </Label>
                <Input
                    id="Search"
                    name="search"
                    placeholder="Busca por código"
                    type="search"
                    onChange={e=>busqueda(e.target.value)}
                />
                
            </FormGroup>
            <Container className="">
            <Link to={`/producto/${searchVar}`}>
                <Button color="danger">Buscar</Button>
            </Link>
            
            </Container>

            
        </form>
        </Container>
    )
}
export default SearchBar