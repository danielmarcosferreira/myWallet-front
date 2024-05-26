import styled from "styled-components"
import axios from "axios"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

export default function HomePage() {
    const { token } = useContext(AuthContext)
    const [dataBase, setDataBase] = useState([])
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (token) {
            const promise = axios.get(`http://localhost:5656/my-data`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            promise.then(resp => {
                setDataBase(resp.data)
            })
            promise.catch(err => {
                console.log(err)
            })
        }

    }, [token])

    return (
        <ContainerPage>
            <Header />
            <RegisterStyle>
                {dataBase.length === 0 ? (
                    <span>There are no entry and exit records</span>
                ) : (
                    dataBase.map((item, index) => (
                        <DataComponentStyle color={"green"} key={index}>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </DataComponentStyle>
                    )))}
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
    & > span {
        position: relative;
        top: 45%;
        left: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #868686;
        width: 180px;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }
`

const DataComponentStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    p {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin-top: 20px;
        &:nth-child(1) {
            color: #868686;
        }
        &:nth-child(2) {
            color: #000000;
        }
        &:nth-child(3) {
            color: ${props => props.color};
        }
    }
`