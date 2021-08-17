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
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Raleway';
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px;
`;

const H1 = styled.h1`
    text-align: center;
    margin: 30px;
    font-size: 60px;
    font-weight: 500;
    font-family: 'Pacifico';
    color: #626262;
`;

const DivLabel = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 1em;
    transition: all .3s;
    text-align: start;
    &:focus-within{
        transform: scale(1.05, 1.05);
    }
`;

const Label = styled.label`
    font-size: 20px;
    color: #aaa;
    display: block;
    opacity: 1;
    transform: translateY(-1.9em);
    transform-origin: 0 0;
    transition: all .3s;
    margin: 1px;
`;

const Input = styled.input` 
    text-transform: capitalize;
    font-size: 20px;
    width: 100%;
    border-style: none none solid none;
    border-color: #aaa; 
    padding: 2px 8px;
    box-shadow: none;
    transition: all .5s;
    &::placeholder{
        color: transparent;
    }
    &:focus{
        box-shadow: none;
        outline: none;
        border-color: #f07b3f;
    }
    &:focus + Label, 
    &:not(:placeholder-shown) + Label {
        transform: translateY(-2.2em) scale(.7);
        font-size: 25px;
    }
    &:focus + Label {
        &:after{
            font-size: 15px;
            content: " (" attr(data-help) ")";
        }
    }
    &:focus:invalid + Label{
        color: red;
    }
    /* &:valid + Label:after{
        content: '   ✔';
        color: green;
    } */
`;

const InputTextarea = styled.textarea`
    font-family: 'Raleway';
    font-size: 15px;
    width: 100%;
    height: 50px;
    border-style: none none solid none;
    border-color: #aaa; 
    padding: 2px 8px;
    box-shadow: none;
    transition: all .5s;
    &::placeholder{
        color: transparent;
    }
    &:focus{
        box-shadow: none;
        outline: none;
        border-color: #f07b3f;
    }
    &:focus + Label, 
    &:not(:placeholder-shown) + Label {
        transform: translateY(-3.6em) scale(.7)
    }
    &:focus:invalid + Label{
        color: red;
    }
`;

const InputRange = styled.input`
    font-size: 20px;
    width: 100%;
    border-style: none none solid none;
    border-color: #aaa; 
    padding: 2px 8px;
    box-shadow: none;
    transition: all .5s;
    cursor: pointer;
    &::placeholder{
        color: transparent;
    }
    &:focus{
        box-shadow: none;
        outline: none;
        border-color: #f07b3f;
    }
    &:focus + Label, 
    &:not(:placeholder-shown) + Label {
        transform: translateY(-2.5em) scale(.7)
    }
    &:invalid + Label{
        color: red;
    }
    &:not(:focus, :required):invalid + Label:after{
        content: '  (Ingresar titulo de la receta)';
    }
`;

const Select = styled.select`
    height: 30px;
    width: 200px;
    border-radius: 3px;
    text-transform: capitalize;
    outline: none;
    border: 1px solid #ced4da;
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

const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    height: 80%;
`;

const Div1 = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const DivSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const DivRange = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #aaa;
`;

const LabelSelect = styled.label`
    color: #aaa;
    margin: 10px;
`;

const DivImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 20%;
`;

//------------------------------------------------

export default function Create(params) {
    const [ info, setInfo ] = useState({
        title: '',
        summary: '',
        spoonacularScore: '',
        healthScore: '',
        analyzedInstructions: '',
        readyInMinutes: '',
        servings: '',
        cuisines: '',
        image: '',
        diets: []
    })

    const dietas = useSelector(store => store.diets)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDiets())
    }, [])

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }

    const handleDiets = (e) => {
        if(!info.diets.includes(e.target.value)){
            setInfo({
                ...info,
                diets: [...info.diets, e.target.value]
            })
        }
    }

    async function handleSubmit(e){
        e.preventDefault()
        await dispatch(createRecipe(info));
        alert(`${info.title} created`)
        setInfo({
            title: '',
            summary: '',
            spoonacularScore: '',
            healthScore: '',
            analyzedInstructions: '',
            readyInMinutes: '',
            servings: '',
            cuisines: '',
            image: '',
            diets: []
        })
    }

    return (
        <Contenedor>
            <Nav />
            <ContenedorForm>
                <H1>Create Recipe</H1>
                <Form onSubmit={(e) => handleSubmit(e)} >
                    <DivRow>
                        <Div1>
                            <DivLabel>
                                <Input required name='title' type="text" id='name' placeholder='Recipe name:' value={info.title} onChange={(e) => handleChange(e)}/>
                                <Label for='name' data-help='Only letters are acepted'>Recipe name*</Label>
                            </DivLabel>
                            <br />
                            <DivLabel>
                                <Input name='servings' type="number" id='servings' placeholder='Recipe name:' value={info.servings} min='0' max='10' onChange={(e) => handleChange(e)}/>
                                <Label for='servings' data-help='Numbers between 0 and 10'>Servings</Label>
                            </DivLabel>
                            <br />
                            <DivLabel>
                                <Input name='readyInMinutes' type="number" id='readyInMinutes' placeholder='Recipe name:' value={info.readyInMinutes} min='0' max='1000' onChange={(e) => handleChange(e)}/>
                                <Label for='readyInMinutes' data-help='In minutes'>Coocking time</Label>
                            </DivLabel>
                            <br />
                            <DivLabel>
                                <Input name='cuisines' type="text" id='cuisines' placeholder='Recipe name:' value={info.cuisines} onChange={(e) => handleChange(e)}/>
                                <Label for='cuisines' data-help='Only letters are acepted'>Cuisines</Label>
                            </DivLabel>
                            <br />
                            <DivLabel>
                                <InputTextarea required name='summary' type="text" placeholder='Summary:' id='summary' value={info.summary} onChange={(e) => handleChange(e)}/>
                                <Label for='summary'>Summary*</Label>
                            </DivLabel>
                            <br />
                            <DivSelect>
                                <LabelSelect>Diet</LabelSelect>
                                <Select name='diets' onChange={(e) => handleDiets(e)}>
                                    {dietas && dietas.map(d => <Option value={`${d}`}>{d}</Option>)}
                                </Select>
                                <div>
                                    <ul>{info.diets.length 
                                        ? info.diets.map(d => <Li>{d}</Li>)
                                        : null
                                    }</ul>
                                </div>
                            </DivSelect>
                            <br />
                        </Div1>
                        <Div1>
                            <DivRange>
                                <span>0</span>
                                <DivLabel>
                                    <InputRange name='spoonacularScore' value='0' min="0" max="100" type="range" placeholder='Score:' id='spoonacularScore' value={info.spoonacularScore} onChange={(e) => handleChange(e)}/>
                                    <Label for='spoonacularScore'>Score</Label>
                                </DivLabel>
                                <span>100</span>
                            </DivRange>
                            <br />
                            <DivRange>
                                <span>0</span>
                                <DivLabel>
                                    <InputRange name='healthScore' value='0' type="range" min="0" max="100" placeholder='Health Score:' id='health' value={info.healthScore} onChange={(e) => handleChange(e)}/>
                                    <Label for='health'>Health Score</Label>
                                </DivLabel>
                                <span>100</span>
                            </DivRange>
                            <DivLabel>
                                <InputTextarea name='analyzedInstructions' type="text" placeholder='Steps:' id='analyzedInstructions' value={info.analyzedInstructions}onChange={(e) => handleChange(e)}/>
                                <Label for='analyzedInstructions'>Steps</Label>
                            </DivLabel>
                            <DivLabel>
                                <Input name='image' type="url" id='image' placeholder='Image:' value={info.image} onChange={(e) => handleChange(e)}/>
                                <Label for='image' data-help='URL'>Image</Label>
                            </DivLabel>
                        </Div1>
                    </DivRow>
                    <DivImg>{
                                info.image
                                ?<img src={info.image} width='120px' height='120px'/>
                                : <span>No image</span>
                            }
                    </DivImg>
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