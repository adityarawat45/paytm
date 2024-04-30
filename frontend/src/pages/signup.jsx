import { Heading } from "../componenets/Heading";
import { SubHeading } from "../componenets/SubHeading";
import { InputBox } from "../componenets/InputBox";
import { Button } from "../componenets/Button";
import { BottomWar } from "../componenets/BottomWar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const   SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPass] = useState("");
  const [username, setUser] = useState(""); 

  const navigate = useNavigate()

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center">
          <Heading label={"Sign Up"}></Heading>
          <SubHeading label={"Enter your information to create an account"}></SubHeading>
          <InputBox onChange={(e) => setFirstName(e.target.value)} placeholder="John" label={"First Name"}></InputBox>
          <InputBox onChange={(e) => setLastName(e.target.value)} placeholder="Doe" label={"Last Name"}></InputBox>
          <InputBox onChange={(e) => setUser(e.target.value)} placeholder="abc@gmail.com" label={"Email"}></InputBox>
          <InputBox onChange={(e) => setPass(e.target.value)} placeholder="123456" label={"Password"}></InputBox>
          <div className="pt-4">
            <Button onClick={async () => {
             const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
              });
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }} label={"Sign Up"}></Button>
          </div>
          <BottomWar label={"Already have an account?"} to={"/signin"} buttonText={"Sign in"}></BottomWar>
        </div>
      </div>
    </div>
  );
};

