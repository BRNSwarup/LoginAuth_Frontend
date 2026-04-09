import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'

const Register = () => {
    const[data,setdata]=useState({
        name:"",
        email:"",
        password:""
    })

    const formdata = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const userdata = async (e) => {
        e.preventDefault()
        const senddata= await axios.post('http://localhost:3000/newUser',data)
        // console.log(data)
        // console.log(senddata)
       setdata({
      name: "",
      email: "",
      password: ""
    })
    }
  return (
    <div style={{height:"100vh"}} className='d-flex justify-content-center align-items-center'>
        <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
            <h2 className='text-primary text-center text-decoration-underline'>SigUP</h2>
      <Form onSubmit={userdata} >
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Control type="text" placeholder="Enter Name" name="name" value={data.name} onChange={formdata}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" name="email" value={data.email} onChange={formdata}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" name="password" value={data.password} onChange={formdata} />
      </Form.Group>
      <Button variant="primary" type="submit" className='w-100'>
        Submit
      </Button>
    </Form>
      <p>Already I Have Account <a href="/login">SignIn</a></p>
    </div>
    </div>
  )
}

export default Register
