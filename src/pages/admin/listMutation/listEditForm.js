import React, { useState } from 'react'

import styled from 'styled-components'


import ResultsListing from './resultsListing'


const ListEditForm = () => {



    const [searchTerm, setSearchTerm] = useState(null)
    const [inputText, setInputText] = useState("")

    const submitSearch = e => {
        e.preventDefault()
        setSearchTerm(inputText)
        setInputText("")
    }

    return (
        <Container>
            <Form onSubmit={submitSearch}>
                <Label htmlFor="rankableSearch">Rankable Search</Label>
                <input name="rankableSearch" type="textfield" onChange={e => setInputText(e.target.value)} value={inputText} />
            </Form>
            {searchTerm ? <h3>Results for "{searchTerm}"</h3> : null }
            {searchTerm ? <ResultsListing key={searchTerm} searchTerm={searchTerm} /> : null }
        </Container>
    )
}

export default ListEditForm

const Container = styled.div`

    width: 400px;
    height: 800px;
    overflow-y: scroll;

    background: #ddd;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #888;

    margin: 0 24px 0 0;
    padding: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Label = styled.label`
    font-weight: 700;
    margin: 0 0 4px 0;
`
