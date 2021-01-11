import React,{ useState, useRef } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

export default function ForgotPassword() {
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const emailRef = useRef()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

async function handleSubmit(e){
    e.preventDefault()


    try {
        setMessage("")
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("send by mail")
    }catch{
        setError('Failed to find email')
    }
    setLoading(false)
}

    return (
        <>
        <Card>
            <h2 className="text-center mb-4">Reset password</h2>
            <Card.Body>
            {error && <Alert variant="danger">{ error }</Alert>}
            {message && <Alert variant="success">{ message }</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} type="submit" className="w-100">Reset password</Button>
                </Form>
                <div className="w-100 text-center mt-2">
                    <Link to="/login">Login</Link>
                </div>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Need an account ? <Link to="/signup">Sign Up </Link>
        </div>

        </>
    )
}
