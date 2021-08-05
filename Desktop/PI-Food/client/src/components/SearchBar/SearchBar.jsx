import React from 'react'
import styled from 'styled-components'

export default function SearchBar(){
    const Search = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    return (
        <Search>
            <div>
                <input placeholder="Aca buscas" />
                <input type="submit" value='Boton' />
            </div>
        </Search>
    )
}