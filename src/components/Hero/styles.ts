import styled from "styled-components"

export const Section = styled.section`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        border-radius: 100%;
        height: 250px;
    }

    @media only screen and (max-width: 1023px){
        flex-direction: column-reverse;

        img{
            margin-bottom: 40px;
        }
    }
`

export const Sobre = styled.div`
    margin-right: 24px;

    h2{
        margin-bottom: 16px;
        font-size: 40px;
    }
    p{
        font-size: 24px;
    }

    @media only screen and (max-width: 1023px){
        text-align: center;
    }
`