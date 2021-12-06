import React, { useState } from "react"
import { Container, Card, Button, Form, CardColumns, Col } from "react-bootstrap"
import { useMutation } from "@apollo/client"
import { isConstValueNode } from "graphql"

const CreatePortfolio = () => {
    const [ userInput, setUserInput ] = useState([])
    const [ firstName, setFirstName ] = useState(" ")
    const [ lastName, setLastName ] = useState(" ")
    const [ email, setEmail ] = useState(" ")
    const [ bio, setBio ] = useState(" ")
    const [ projects, setProjects ] = useState(" ")
    const [ newUser, setNewUser ] = useState({})
    // const [ savedUser, {error} ] = useMutation(SAVE_USER)

    const handleformsubmit = async (event) => {
        event.preventDefault()
        // console.log(firstName, lastName)
        // const { userInfo } = response.json()
        // const userData = userInfo.map((relinfo) => {
            // firstName: relinfo.firstName
    //    }) 
        // console.log(userData)
        const newFirstName = firstName
        const newLastName = lastName
        const newEmail = email
        const newBio = bio
        const newProjects = projects
        setNewUser({firstName, lastName, email, bio, projects})
        // const newUser = {newFirstName, newLastName, newEmail, newBio, newProjects}
        console.log(firstName, lastName, email, bio, projects)

    }


    return (
        <>
            <Container>
                <h3>Enter information:</h3>
                <Form onSubmit={handleformsubmit}>
                    <Form.Row>
                        <Col xs={12} md={8}>                         
                        <h6>First Name:</h6>
                        <Form.Control 
                                name="firstName"                            
                                type="text"
                                size="lg"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value) }
                                placeholder="First name"
                            >
                            </Form.Control>
                        </Col> 
                    </Form.Row>

                    <Form.Row>
                        <Col xs={12} md={8}>
                            <h6>Last Name:</h6>
                            <Form.Control 
                                name="lastName"
                                type="text"
                                size="lg"
                                placeholder="Last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value) }
                            >
                            </Form.Control>
                        </Col> 
                    </Form.Row>

                    <Form.Row>
                        <Col xs={12} md={8}>
                        <h6>Email:</h6>
                            <Form.Control 
                                name="email"
                                type="text"
                                size="lg"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value) }
                            >
                            </Form.Control>
                        </Col> 
                    </Form.Row>

                    <Form.Row>
                        <Col xs={12} md={8}>
                        <h6>Bio:</h6>
                            <Form.Control 
                                name="bio"
                                type="text"
                                size="lg"
                                placeholder="Bio"
                                value={bio}
                                onChange={(e) => setBio(e.target.value) }
                            >
                            </Form.Control>
                        </Col> 
                    </Form.Row>

                    <Form.Row>
                        <Col xs={12} md={8}>
                        <h6>Projects:</h6>
                            <Form.Control 
                                name="projects"
                                type="text"
                                size="lg"
                                placeholder="Projects"
                                value={projects}
                                onChange={(e) => setProjects(e.target.value) }
                            >
                            </Form.Control>
                        </Col> 
                    </Form.Row>


                    <Form.Row>
                        <Button type ="submit" variant="success" size="lg">
                            Add User
                        </Button>
                    </Form.Row>



                </Form>
            </Container>
        </>
    ) 
}

export default CreatePortfolio;