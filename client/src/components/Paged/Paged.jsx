import React from 'react'
import styled from 'styled-components';

//Styled-components

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
`;

const LiSelected = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
    width: 20px;
    height: 30px;
    color: orange;
    border: 2px #f07b3f solid;
    border-top: none;
    border-left: none;
    border-right: none;
`;

//---------------------------------------------

export default function Paged({ recipePerPage, recipes, paged, currentPage }) {
    const pageNumber = []

    for(let i = 0; i <= Math.floor(recipes/recipePerPage); i++){
        pageNumber.push(i+1);
    }

    return (
        <nav>
            <Ul>
                {
                    pageNumber && pageNumber.map(n => {
                        if(n === currentPage){
                            return (
                                <LiSelected>
                                    <a onClick={() => paged(n)}>{n}</a>
                                </LiSelected>
                            )
                        } else {
                            return (
                                <Li>
                                    <a onClick={() => paged(n)}>{n}</a>
                                </Li>
                            )
                        }
                    })
                }
            </Ul>
        </nav>
    )
}