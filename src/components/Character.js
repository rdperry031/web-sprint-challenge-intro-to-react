// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCharacter = styled.div`
margin: 5% 15% 5% 15%;
padding: 3%;
font-size: 3rem;
display: flex;
justify-content: space-between;
text-align: left;
border: solid 4px #FFE81F;
`

export default function Character(props) {
    const {character} = props;
    return (
        <div>
            <StyledCharacter>
            <div>
                {character.name}
            </div>
            <div>
                {character.birth_year}
            </div>
            </StyledCharacter>
    </div>
        )
}
