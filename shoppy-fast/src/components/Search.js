import React,{useState} from "react"
import { Link } from "react-router-dom";
import { FormGroup,Input,Label,Button, Container} from "reactstrap"
const SearchBar = ({searchVar,setSearchVar,data}) => {
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
            <Link to={`/producto/${searchVar}`}>
                <Button color="danger" >Search it!</Button>
            </Link>
            <Link to="/carrito">
                <Button color="primary" >Go to Trolley</Button>
            </Link>
        </form>
    )
}
export default SearchBar