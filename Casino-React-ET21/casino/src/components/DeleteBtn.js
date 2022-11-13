import axios from 'axios'
import React from 'react'
import { Button } from 'semantic-ui-react'

function DeleteBtn(props){
    const {user} = props
    async function deleteUser(){
        console.log('http://localhost:3001/usuarios/' +user)
        await axios.delete('http://localhost:3001/usuarios/' +user)
        window.location.reload()
    }
    
    return(
        <div>
            <Button negative onClick={deleteUser}>Eliminar</Button>
        </div>
    )
  
}

export default DeleteBtn
