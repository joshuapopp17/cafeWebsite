import React, { useState } from 'react'
import { Button, Container, Form, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import './Contact.css'
import LogoBlack from '../../assets/LogoBlack.png'
import Footer from '../../components/Footer/Footer'
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
    <Container style={{height: '100vh'}}>
        <div className='section'>
          <h1 className='header'>Contact us</h1>
          <h3 className='text'>Phone / 123-123-1234</h3>
          <h3 className='text'>Email / support@cafehellwach.com</h3>
        </div>
        <div className='section'>
          <h1 className='header'>Wholesale Inqueries</h1>
          <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>
            <input className='inputBox' placeholder={"First Name"} {...register("FirstName")} />
            <input className='inputBox' placeholder={"Last Name"} {...register("LastName")} />
            <input className='inputBox' placeholder={"Email*"} {...register("email", {required: true})} />
            
            <input className='inputBox' placeholder={"Subject*"} {...register("subject", {required: true})} />
            <textarea className='inputBox'  rows="5" placeholder={"Message*"} {...register("message", {required: true})} />
            {errors.email && <span>Please provide an email</span>}
            {errors.subject && <span>Please provide a subject</span>}
            {errors.message && <span>Please provide a message</span>}
            <input className="subButton"  type="submit" />
          </form>
        </div>
    </Container>
    <Footer></Footer>
  </div>
  )
}

export default Contact