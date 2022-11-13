import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import DeleteBtn from './DeleteBtn';

function UserCard(props){
    const {id, nombre, mail, balance} = props;

    return (
        <>
        <Card>
            <Image src='' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{nombre}</Card.Header>
                <Card.Meta>
                    <span className='balance'>Balance: {balance}</span>
                </Card.Meta>
                <Card.Description>
                    {mail}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                User ID "{id}"
            </Card.Content>
            <DeleteBtn user={nombre}/>
        </Card>
        </>
    )
}

export default UserCard