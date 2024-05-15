import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NotFoundPage() {
    return (
        <ContainerError>
            <div>404 Not Found</div>
            <Link to={"/"}>Home</Link>
        </ContainerError>
    )
}

const ContainerError = styled.div`
    font-size: 40px;
    text-decoration: none;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        margin-bottom: 20px;
    }
`