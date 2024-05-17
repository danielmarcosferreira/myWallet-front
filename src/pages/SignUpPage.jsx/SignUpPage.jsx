import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

export default function SignUpPage() {
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPass: "" })
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function register(e) {
        e.preventDefault()
        const body = {
            name: form.name,
            email: form.email,
            password: form.password,
            confirmPass: form.confirmPass
        }

        axios.post(`http://localhost:5656/sign-up`, body)
            .then((resp) => {
                console.log(resp.data)
                localStorage.setItem(`user`, JSON.stringify(resp.data))
                navigate("/")
            })
            .catch((err) =>alert(err.response.data))

    }

    return (
        <ContainerPage>
            <h1>MyWalley</h1>
            <Form onSubmit={register}>
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    required />
                <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    required />
                <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    required />
                <input
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPass"
                    value={form.confirmPass}
                    onChange={handleForm}
                    required />
                <button type="submit">Register</button>
            </Form>
            <p>Already have an account? <LinkContainer to={"/"}>SIGN - IN!</LinkContainer></p>
        </ContainerPage>
    )
}

const ContainerPage = styled.div`
    background-color: #8b12be;
    height: 100vh;
    font-family: "Raleway", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-family: "Saira Stencil One", sans-serif;
        font-size: 32px;
        margin-bottom: 20px;
    }
    p {
        color: white;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        width: 350px;
        height: 55px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        &::placeholder {
            color: black;
            font-size: 20px;
            font-weight: 400;
            padding-left: 10px;
        }
    }
    button {
        background-color: #A328D6;
        color: white;
        font-size: 20px;
        font-weight: 700;
        width: 350px;
        height: 45px;
        border-radius: 5px;
        border: none;
        margin-bottom: 30px;
        cursor: pointer;
        &:hover {
            background-color: #69128e;
            border: 1px solid #69128e;
            transition: 0.25s all ease-out;
        }
    }
`

const LinkContainer = styled(Link)`
    color: white;
    font-weight: 700;
    &:hover {
        color: black;
        transition: 0.2s all ease-out;
    }
`