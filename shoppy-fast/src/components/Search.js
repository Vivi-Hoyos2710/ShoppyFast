import React,{useState} from "react"
import { Link } from "react-router-dom";
import { FormGroup,Input,Label,Button, Container} from "reactstrap"
import { BsFillCartFill } from "react-icons/bs";
const SearchBar = ({searchVar,setSearchVar}) => {
    const busqueda=(entrada)=>{
        console.log(searchVar);
        setSearchVar(entrada);
    }
    return (
        <form>
            <FormGroup>
                <Label for="Search">
                    
                </Label>
                <Input
                    id="Search"
                    name="search"
                    placeholder="Search by code"
                    type="search"
                    onChange={e=>busqueda(e.target.value)}
                />
                
            </FormGroup>
            <Container className="">
            <Link to={`/producto/${searchVar}`}>
                <Button color="danger" >Search it!</Button>
            </Link>
            <Link to="/carrito">
                <Button color="primary" >Go to Trolley<BsFillCartFill/></Button>
            </Link>
            </Container>

            
        </form>
    )
}
export default SearchBar