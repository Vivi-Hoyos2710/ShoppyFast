import React,{useState} from "react"
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
            <Button color="danger" href={`producto/${searchVar}`}>Search it!</Button>
        </form>
    )
}
export default SearchBar