import React from 'react'

import styled, { css } from 'styled-components'

const RankableListElement = ({ name, imageUrl, description, types, url, details, detailSource }) => {
    return (
        <Container>
            {imageUrl ? <Image src={imageUrl} alt={name} /> : <ImageAbsent>?</ImageAbsent>}
            <BasicInfo>
                {url ? <a target="_blank" href={url}><h3>{name}</h3></a> : <h3>{name}</h3>}
                <h4>{description}</h4>
                {/* <Tags>{types.map(type => <Tag key={type}>{type}</Tag>)}</Tags>
                {details && detailSource ?
                    <>
                    <p>{details}</p>
                    <a target="_blank" href={detailSource}>Learn more...</a>
                    </>
                : null} */}
            </BasicInfo>
        </Container>
    )
}

export default RankableListElement

const Container = styled.div`
    width: 100%;

    margin: 8px 0 0 0;

    display: flex;

`

const imageSpace = css`
    width: 80px;
    height: 80px;
    border: 4px solid #555;
    border-radius: 8px;
    margin: 10px;
`

const Image = styled.img`
    ${imageSpace}
    object-fit: cover;
`

const ImageAbsent = styled.div`
    ${imageSpace}
    font-size: 42px;
    font-weight: 700;
    color: #ddd;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BasicInfo = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px;
    width: 75%;
`

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Tag = styled.span`
    margin: 0 4px 4px 0;
    padding: 4px;
    font-weight: 700;
    font-size: 16px;
    color: #ddd;
    background: #333;
    border-radius: 4px;
    max-width: 100%;
`