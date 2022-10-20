import React, {useState}from 'react';
import AdminApp from './components/Administrador/AdminApp';
import UserApp from './components/Usuario/UserApp';
function App() {
  const [esAdmin, setEsAdmin] = useState(false);

  if(localStorage.getItem('tokenAdmin') !== null){

    return (<><AdminApp/></>)
  }
  else{
    return(<UserApp/>)
    }
  }

export default App;