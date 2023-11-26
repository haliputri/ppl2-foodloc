import React, {useState} from "react";
import bg from "../assets/background-2.png";
import vector from "../assets/bg.png";
("use client");
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import Navigation from "../components/Navigation";
import FooterResto from "../components/FooterResto";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };
    axios.post('http://localhost:8080/users/login', data)
    .then(result => {
      console.log(result)
      if(result.data.message === "Success"){
        navigate(`/profile/${result.data.id}`)
      }
    })
    .catch( error => console.log (error))
  }

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
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
          <form className="flex flex-col gap-4">
          <div>
                <div className="mb-2 block">
                  <Label value="Your email" />
                </div>
                <input
                  id="email1"
                  placeholder="name@flowbite.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your password" />
                </div>
                <input 
                  id="password" 
                  required 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <Button style={{ backgroundColor: "#FFA90A" }} onClick={handleSubmit}>Sign In</Button>
            <GoogleOAuthProvider clientId="39039937550-ragrh883e53mqgucmkcb5j67cn14ssar.apps.googleusercontent.com"><span style={{ justifyContent: "center", display:"flex" }}>- atau -</span> 
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
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="/register"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
        </Card>
        </div>
      </div>
      <FooterResto />
    </div>
  )
}

export default Login