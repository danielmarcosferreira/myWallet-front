import styled from "styled-components"
import axios from "axios"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useEffect } from "react"

export default function HomePage() {
    const user = JSON.parse(localStorage.getItem("user"))
    let datas = []

    useEffect(() => {
        axios.get(`http://localhost:5656/newData`, user.email)
        .then(resp => {
            datas = [...datas, resp.data]
            console.log(resp.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <ContainerPage>
            <Header />
            <RegisterStyle>
                <p>There are no entry and exit records</p>
            </RegisterStyle>
            <Footer />
        </ContainerPage>
    )
}

const ContainerPage = styled.div`
    background-color: #8b12be;
    height: 100vh;
    width: 100%;
    font-family: "Raleway", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RegisterStyle = styled.div`
    background-color: #FFFFFF;
    width: 330px;
    height: 450px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        color: #868686;
        width: 180px;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }
`