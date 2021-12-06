import React from "react"
import { Container, Card, Button, Form, CardColumns, Col } from "react-bootstrap"
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
                    <Form.Row>
                        <Col xs={12} md={8}>
                            <Form.Control 
                                name="firstName"
                                type="text"
                                size="lg"
                                placeholder="Enter users first name."
                            >

                            </Form.Control>
                        </Col> 
                    </Form.Row>
                </Form>
            </Container>
        </>
    ) 
}

export default CreatePortfolio;