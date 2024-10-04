import styled from "styled-components"

export const HeaderSection = styled.div`
    text-align: center;
    margin: 40px 0 40px 0;

    h2{
        font-size: 40px;
    }
    p{
        font-size: 24px;
    }
`

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    @media only screen and (max-width: 1023px){
        grid-template-columns: 1fr;
    }
    
`
export const Card = styled.div`
    border: 1px solid #ccc;
    padding: 16px;

    h3{
        font-size: 32px;
        text-transform: uppercase;
        margin-bottom: 8px;
    }
    p{
        font-size: 24px;
        margin-bottom: 8px;
    }

    a{
        font-size: 24px;
    }
`