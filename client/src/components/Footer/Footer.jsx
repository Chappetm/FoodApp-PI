import React from 'react'
import styled from 'styled-components'
import git from '../../media/git.png'
import linkedin from '../../media/linkedin.png'
import gmail from '../../media/gmail.png'

//Styled-components

const DivFooter = styled.footer`
    height: 300px;
    width: 100%;
    background-color: #141414;
    color: #aaa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DivConteiner = styled.div`
    padding: 0px 30px 0 30px;
    margin-left: 10%;
    margin-right: 10%;
    width: auto;
    height: auto;
    background-color: #141414;
    color: #aaa;
`;

const DivSocial = styled.div`
    width: 100%;
`;

const DivRow = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

const H6 = styled.h6`
    margin: 0;
    color: white;
    font-size: 16px;
    font-family: 'Raleway';
    font-weight: 500;
`;

const DivAbout = styled.div`
    position: relative;
    height: 100%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`;

const DivFront = styled.div`
    position: relative;
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`;

const DivBack = styled.div`
    position: relative;
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`;

const DivDb = styled.div`
    position: relative;
    height: 100%;
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
`;

const DivContact = styled.div`
    margin: 0 30px 0 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DivRedes = styled.div`
    
`;
const P = styled.p`
    margin-top: 1em;
    color: #737373;
`;

const A = styled.a`
    &:hover{
        color: #f07b3f;
        cursor: pointer;
    }
`;

const ALinkedin = styled.a`
    background-color:#313131;
    display:inline-block;
    line-height:55px;
    width:44px;
    height:44px;
    text-align:center;
    margin-right:8px;
    border-radius:100%;
    transition:all .2s linear;
    &:hover, linkedin{
        background-color:#007bb6
    }
`;

const AGmail = styled.a`
    background-color:#313131;
    display:inline-block;
    line-height:55px;
    width:44px;
    height:44px;
    text-align:center;
    margin-right:8px;
    border-radius:100%;
    transition:all .2s linear;
    &:hover, linkedin{
        background-color:#EA4335
    }
`;

const AGit = styled.a`
    background-color:#313131;
    display:inline-block;
    line-height:53px;
    width:44px;
    height:44px;
    text-align:center;
    margin-right:8px;
    border-radius:100%;
    transition:all .2s linear;
    &:hover, linkedin{
        background-color:#F7F7F7
    }
`;

const Hr = styled.hr`
    margin: 0;
    border-color: #737373;
`;

const Ul = styled.ul`
    list-style: none;
    padding: 0;
    color: #737373;
`;

const Li = styled.li`
    margin: 5px;
`;

const UlRow = styled.ul`
    list-style: none;
    padding: 0;
    color: #737373;
    display: flex;
    flex-direction: row;
`;

//---------------------------------------
export default function Footer(){

    return (
        <DivFooter>
            <DivConteiner>
                <DivRow>
                    <DivAbout>
                        <H6>ABOUT</H6>
                        {/* <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis sed aspernatur omnis, at iusto ipsam natus earum laudantium placeat eius officia exercitationem pariatur optio quo blanditiis excepturi similique officiis.</P> */}
                        <P>Este es un proyecto individual creado en 3 semanas para el bootcamp SoyHenry en el que utilice una Api de recetas para crear una aplicación donde se puede buscar por nombre, ver los detalles de cada una, filtrar por diferentes dietas, ordenar alfabeticamente y por score, guardarlas en favoritos y crear tu propia receta. </P>
                    </DivAbout>
                    <DivFront>
                        <H6>FRONT-END</H6>
                        <Ul>
                            <li><A>React</A></li>
                            <li><A>Redux</A></li>
                            <li><A>Styled-component</A></li>
                        </Ul>
                    </DivFront>
                    <DivBack>
                        <H6>BACK-END</H6>
                        <Ul>
                            <li><A>Node</A></li>
                            <li><A>Sequelize</A></li>
                            <li><A>Express</A></li>
                            <li><A>Api (Spooncular)</A></li>
                        </Ul>
                    </DivBack>
                    <DivDb>
                        <H6>DATA BASE</H6>
                        <Ul>
                            <li><A>Postgres</A></li>
                            <li><A>Pg Admin</A></li>
                        </Ul>
                    </DivDb>
                </DivRow>
                <Hr />
            </DivConteiner>
            <DivSocial>
                <DivRow>
                    <DivContact><H6>Contact me:</H6></DivContact>
                    <DivRedes>
                        <UlRow>
                            <Li><AGit href='https://github.com/Chappetm' ><img src={git} width='25px' height='25px'/></AGit></Li>
                            <Li><ALinkedin href='https://linkedin.com/in/matias-chappet'><img src={linkedin} width='25px' height='25px'/></ALinkedin></Li>
                            <Li><AGmail href='mailto:matiaschappet@gmail.com'><img src={gmail} width='25px' height='25px'/></AGmail></Li>
                        </UlRow>
                    </DivRedes>
                </DivRow>
            </DivSocial>
        </DivFooter>
    )
}