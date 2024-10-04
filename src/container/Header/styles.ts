import styled from "styled-components"

export const Header = styled.header`
    background-color: #ffffff;
    box-shadow: 0px 6px 6px -1px rgba(130,130,130,0.60);
`

export const Nav = styled.nav`
    ul{
        display: flex;
        justify-content: center;
    }

    li{
        padding: 16px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 24px;
    }

    a{
        text-decoration: none;
    }

    @media only screen and (max-width: 1023px){
       ul{
        display: inline;
        text-align: center;
       }
    }
`