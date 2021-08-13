// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
/* margin-top: 5%;
margin-left: 15%;
margin-right: 15%; */
margin: 5% 15% 0% 15%;
padding: 3%;
font-size: 2.5rem;
text-align: left;
border: solid 4px #FFE81F
`

export default function Character(props) {
    const {character} = props;
    return (
        <StyledCharacter>
            {character.name}
        </StyledCharacter>
    )
}
