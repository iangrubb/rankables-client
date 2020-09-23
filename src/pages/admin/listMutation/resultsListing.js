import React from 'react'

import styled from 'styled-components'

import { useQuery, gql } from '@apollo/client';

import RankableListElement from '../../../components/rankableListElement'

const RANKABLE_QUERY = gql`
    query ($searchTerm: String!) {
        searchRankables(searchTerm: $searchTerm) {
            id
            name
            types
            url
            imageUrl
            description
            details
            detailSource
        }
    }
`

const ResultsListing = ({ searchTerm }) => {

    const { loading, error, data } = useQuery(RANKABLE_QUERY, {variables: { searchTerm: searchTerm }});

    console.log(data)

    if (loading) return <h4>Loading...</h4>

    return (
        <>
            {data.searchRankables.map(rankable => <RankableListElement key={rankable.id} {...rankable} />)}
        </>
    )
}

export default ResultsListing
