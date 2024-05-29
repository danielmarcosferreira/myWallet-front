import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function EditOutputPage() {
    const [form, setForm] = useState({ price: "", description: "" })
    const navigate = useNavigate()
    const location = useLocation()
    const { item } = location.state || {}

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function save(e) {
        e.preventDefault()
        const body = {
            price: `-${form.price}`,
            description: form.description
        }

        axios.put(`http://localhost:5656/my-data/${item._id}`, body)
            .then((resp) => {
                navigate("/")
            })
            .catch((err) => console.log(err.response))
    }

    return (
        <EntryContainer>
            <h1>Edit Output</h1>
            <Form onSubmit={save}>
                <input
                    placeholder="Price"
                    type="number"
                    name="price"
                    step={"0.01"}
                    value={form.price}
                    onChange={handleForm}
                    required />
                <input
                    placeholder="Description"
                    type="text"
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                    required />
                <button type="submit">Update Output</button>
            </Form>
        </EntryContainer>
    )
}

const EntryContainer = styled.div`
    background-color: #8b12be;
    height: 100vh;
    font-family: "Raleway", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: white;
        width: 100%;
        font-size: 26px;
        font-weight: 700;
        margin: 15px;
        text-align: start;
        padding: 15px;
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