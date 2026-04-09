import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';


const ForgotPasswordPage = () => {

  const [data, setdata] = useState({
    email: "",
    otp: "",
    password: ""
  })

  const navigate = useNavigate()

  const [otpFiled, setotpField] = useState(false)
  const [passwordfield, setpasswordfield] = useState(false)


  const formdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const sendOTP = async (e) => {
    try {
      const response = await axios.post('http://localhost:3000/forgotPassword', { email: data.email })
      // console.log(response)
      if (response.status == 200) {
        setotpField(true)
      }
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("SERVER ERROR:", error?.response);
      alert("Error while sending OTP");
    }
  }
  const newpassword = async() => {
    try {   
      const response = await axios.post('http://localhost:3000/verifyOTP',{ email: data.email,otp:data.otp })
      // console.log(response)
      if (response.status==200) {
        setpasswordfield(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toudateData = async (e) => {
    // e.preventDefault()
    // console.log(data)
    const response = await axios.post('http://localhost:3000/newpassword',{ email: data.email,password:data.password })
    // console.log(response)
    if (response.status==200) {
      alert("password Updated Successfully!")
      navigate("/login")
    }

  }
  return (
    <div style={{ height: "100vh" }} className='d-flex w-100 justify-content-center align-items-center'>
      <div className='shadow-lg p-3 mb-5 bg-body-tertiary w-75 rounded' >
        <h2 className='text-primary text-center text-decoration-underline'>forgot Password</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" name="email" disabled={otpFiled} value={data.email} onChange={formdata} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {
            otpFiled == false ?
          <Button variant="primary" type="button" className='w-100' onClick={sendOTP}>
            Get OTP
          </Button>
         :
        <>
          <Form.Group className="mb-3" controlId="formBasicotp">
            <Form.Control type="text" placeholder="Enter OTP" name="otp" disabled={passwordfield} value={data.otp} onChange={formdata} />
          </Form.Group>
          {
            passwordfield == false ?
              <Button variant="primary" type="button" className='w-100' onClick={newpassword}>
                Verify OTP
              </Button> :
              <>
                <Form.Group className="mb-3" controlId="formBasicpassw">
                  <Form.Control type="text" placeholder="Enter New Password" name="password" value={data.password} onChange={formdata} />
                </Form.Group>
                <Button variant="primary" type="button" className='w-100' onClick={toudateData}>
                  Update password
                </Button>
              </>
          }
        </>
          }
      </Form>
    </div>
    </div >
  )
}

export default ForgotPasswordPage