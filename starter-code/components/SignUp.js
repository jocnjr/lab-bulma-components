import React, { Component } from 'react';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Message from './Message';
import Container from './Container';


class SignUp extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" />
        <CoolButton isSmall isSuccess>Submit</CoolButton>
        <CoolButton isSmall isSuccess>Submit</CoolButton>
        <Container>
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>

      </div>
    )
  }
}

export default SignUp;