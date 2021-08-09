import React from 'react'
import { useState } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import getDiets from '../../actions/getDiets'
import createRecipe from '../../actions/createRecipe'

//Styled-components

const Contenedor = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContenedorForm = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;
    grid-template-rows: 15% 80% 5%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const H1 = styled.h1`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    text-align: center;
`;

const Label = styled.label`
    font-weight: 700;
`;

const Input = styled.input`
    width: 40%;
    box-shadow: 5px 5px 20px lightgray;
    border-radius: 3px;
`;

const InputTwo = styled.input`
    width: 40%;
    height: 10%;
    box-shadow: 5px 5px 20px lightgray;
    border-radius: 3px;
    padding: 0;
`;

const Select = styled.select`
    width: 30%;
    height: 10%;
    box-shadow: 5px 5px 20px lightgray;
    border-radius: 3px;
    text-transform: capitalize;
    outline: none;
`;

const Option = styled.option`
    text-transform: capitalize;
`;

const Li = styled.li`
    text-transform: capitalize;
`;

const Button = styled.button`
    background-color: #f07b3f;
    height: 40px;
    width: 300px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #f07b3f;
    box-shadow: 5px 5px 20px lightgray;
    color: white;
    font-family: 'Raleway';
    font-weight: 700;
    &:hover{
        background-color: #BD6537
    }
`;

const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Create(params) {
    const [ info, setInfo ] = useState({
        title: '',
        summary: '',
        score: '',
        healthScore: '',
        steps: '',
        diets: []
    })
    const [ diets, setDiets] = useState([])

    const dietas = useSelector(store => store.diets)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDiets())
    }, [])

    const handleDiets = (e) => {
        if(!info.diets.includes(e.target.value)){
            setInfo({
                ...info,
                diets: [...info.diets, e.target.value]
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRecipe(info));
        alert('Recipe created')
    }

    return (
        <Contenedor>
            <Nav />
            <ContenedorForm>
                <H1>Create Recipe</H1>
                <Form onSubmit={(e) => handleSubmit(e)} >
                    <Label>Recipe name:</Label>
                    <Input type="text" value={info.title} />
                    <br />
                    <Label>Summary:</Label>
                    <InputTwo type="text" value={info.summary} />
                    <br />
                    <Label>Diet:</Label>
                    <Select onChange={(e) => handleDiets(e)}>
                        {dietas && dietas.map(d => <Option value={`${d}`}>{d}</Option>)}
                    </Select>
                    <ul>{info.diets.length 
                            ? info.diets.map(d => <Li>{d}</Li>)
                            : null
                        }</ul>
                    <br />
                    <Label>Score:</Label>
                    <Input type="text" value={info.score} />
                    <br />
                    <Label>Health Score:</Label>
                    <Input type="text" value={info.healthScore} />
                    <br />
                    <Label>Steps:</Label>
                    <InputTwo type="text" value={info.steps} />
                    <br />
                    <br />
                    <DivButton>
                        <Button type="submit" >CREATE RECIPE</Button>
                    </DivButton>
                </Form>
            </ContenedorForm>
            <Footer />
        </Contenedor>
    )
}