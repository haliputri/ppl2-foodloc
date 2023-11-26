import React from 'react'
import bg from "../assets/background-2.png";
import vector from "../assets/bg.png";
("use client");
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Navigation from "../components/Navigation";
import FooterResto from "../components/FooterResto";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Login = () => {
  return (
    <div>
      <Navigation />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: "682px",
        }}
      >
      <img
        src={vector} 
        style={{
          position: "absolute",
          top: "70px",
          left: "250px",
          width: "1440px",
          "z-index": "-1"
        }}
      />
        <div className="pt-40 pl-24">
        <Card style={{ width: "30%" }}>  
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                placeholder="name@flowbite.com"
                required
                type="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" required type="password" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
            <GoogleOAuthProvider clientId="39039937550-ragrh883e53mqgucmkcb5j67cn14ssar.apps.googleusercontent.com">...
              <GoogleLogin
                onSuccess={credentialResponse => {
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log(decoded);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
        />
            </GoogleOAuthProvider>
          </form>
        </Card>
        </div>
      </div>
      <FooterResto />
    </div>
  )
}

export default Login
