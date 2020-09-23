import React from 'react'

import styled from 'styled-components'

import ListEditForm from './listEditForm'




const ListMutation = () => {

    return (
        <Container>
            <ListEditForm />
            <ListDisplay>

            </ListDisplay>
        </Container>
    )
}

export default ListMutation

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    padding: 40px;
`

const ListDisplay = styled.div`
    width: 500px;
    height: 800px;
    background: #ddd;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #888;
`
