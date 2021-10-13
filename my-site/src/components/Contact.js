import React from 'react'
import {FiMail} from "react-icons/fi"
import styled from 'styled-components/macro'

function Contact() {
    return (
        <Box id="contact">
            <Titre>Contact</Titre>
            <ContactBox>
                <Txt>Je cherche aujourd’hui un premier emploi en tant que développeuse Fullstack d'application web et mobile.</Txt>
                <Mail><a href="mailto:gveronikaa@hotmail.com" rel="noreferrer">gveronikaa@hotmail.com</a></Mail>
                <Logo><FiMail /></Logo>
            </ContactBox>        
        </Box>
    )
}

export default Contact

const Box = styled.div`
    background: #0A192F;
    color: #8892B0;
    padding: 2rem 2rem;
    text-align: center;
    font-size: 25px;
`

const Titre = styled.h1`
    color: white;
    text-align: center;
    font-size: 40px;
`

const Txt = styled.div`

    font-size: 20px;
    padding: 3% 7%;
    text-align: center;
`
const ContactBox = styled.div`
`

const Mail = styled.div`
    padding: 2% 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    a {
        color: white;
        text-decoration: none;
        transition: all 0.3s ease-in-out;

        &:hover {
            color: #64FFDA !important;
            transform: translateY(-3px);
            transition: all 0.3s ease-in-out;
        }
    }
    
`

const Logo = styled.div`
    color: white;
    text-align: center;
    font-size: 30px;
`
