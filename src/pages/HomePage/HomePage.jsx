import styled from "styled-components"
import axios from "axios"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"

export default function HomePage() {
    const { token } = useContext(AuthContext)
    const [dataBase, setDataBase] = useState([])
    const [finalValue, setFinalValue] = useState("")

    useEffect(() => {
        if (token) {
            const promise = axios.get(`http://localhost:5656/my-data`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            promise.then(resp => {
                let values = ""
                let allData = (resp.data)
                setDataBase(resp.data)
                allData.map((item) => (values = Number(values) + Number(item.price)))
                setFinalValue(values)
            })
            promise.catch(err => {
                console.log(err)
            })
        }
    }, [token, finalValue])


    return (
        <ContainerPage>
            <Header />
            <RegisterStyle>
                <div>
                    {dataBase.length === 0 ? (
                    <span>There are no entry and exit records</span>
                ) : (
                    dataBase.map((item, index) => (
                        <DataComponentStyle color={item.type === "plus" ? "green" : "red"} key={index}>
                            <div>
                                <p>{item.date}</p>
                                <p>{item.description}</p>
                            </div>
                            
                            <p>{item.price}</p>
                        </DataComponentStyle>
                    )))}
                </div>
                {dataBase.length === 0 ? "" : (
                    <FooterDataComponentStyle color={finalValue >= 0 ? "green" : "red"}>
                        <p>SALDO</p>
                        <p>{finalValue}</p>
                    </FooterDataComponentStyle>
                )}
                
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
    flex-direction: column;
    justify-content: space-between;
    span {
        position: relative;
        top: 500%;
        left: 23%;
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
    padding: 0 12px;
    div {
        display: flex;
        p {
            &:nth-child(1) {
            color: #868686;
            }
            &:nth-child(2) {
                color: #000000;
                margin-left: 10px;
            }
        }
    }
    p {
        font-size: 18px;
        font-weight: 400;
        text-align: center;
        margin-top: 20px;
        &:nth-child(2) {
            color: ${props => props.color};
        }
    }
`

const FooterDataComponentStyle = styled.div`
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    p {
        padding: 10px;
        &:nth-child(1) {
            font-size: 17px;
            font-weight: 700;
        }
        &:nth-child(2) {
            color: ${props => props.color};
        }
    }
`