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
                <h3>Enter information:</h3>
                <Form onSubmit={handleformsubmit}>

                </Form>
            </Container>
        </>
    ) 
}

export default CreatePortfolio;