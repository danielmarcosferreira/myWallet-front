import styled from "styled-components"
import logout from "../assets/logout.png"
import { useNavigate } from "react-router-dom"

export default function Header() {
    const navigate = useNavigate()
    return (
        <HeaderContainer>
            <h1>Hello, Fulano!</h1>
            <img src={logout} onClick={() => navigate("/")}/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 0px 25px;
    h1 {
        color: white;
        font-family: Raleway;
        font-weight: 700;
        font-size: 26px;
    }
    img {
        width: 23px;
        cursor: pointer;
        &:hover {
            background-color: #69128e;
            transition: 0.25s all ease-out;
        }
    }
`