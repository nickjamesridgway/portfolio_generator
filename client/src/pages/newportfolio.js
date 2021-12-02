import React from "react"
import { Container, Card, Button, Form, CardColumns } from "react-bootstrap"
import { useMutation } from "@apollo/client"

const CreatePortfolio = () => {

    const handleformsubmit = () => {
        // event.preventDefault()

    }

    return (
        <>
            <Container>
                <h1>Enter information:</h1>
                <Form onSubmit={handleformsubmit}>

                </Form>
            </Container>
        </>
    ) 
}

export default CreatePortfolio;