// Write your Character component here
import React from 'react'
import Styled from 'styled-components'

export default function Character(props) {
    const {character} = props;
    return (
        <div>
            {character.name}
        </div>
    )
}
