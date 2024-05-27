import styled from "styled-components"
import plus from "../assets/plus-circle.png"
import minus from "../assets/minus-circle.png"
import { useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate()
    
    return (
        <FooterContainer>
            <div onClick={() => navigate("/newEntry")}>
                <img src={plus}/>
                <p>New data input</p>
            </div>
            <div onClick={() => navigate("/newOutput")}>
                <img src={minus} />
                <p>New data output</p>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    display: flex;
    div {
        background-color: #a328d6;
        width: 155px;
        height: 115px;
        margin: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        cursor: pointer;
        img {
            margin: 10px;
        }
        p {
        color: #FFFFFF;
        width: 50px;
        font-size: 17px;
        font-weight: 700;
        margin: 10px;
        }
        &:hover {
            background-color: #69128e;
            transition: 0.25s all ease-out;
        }
    }
`