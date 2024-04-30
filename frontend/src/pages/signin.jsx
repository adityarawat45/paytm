import { Heading } from "../componenets/Heading"
import {SubHeading} from "../componenets/SubHeading"
import {InputBox} from "../componenets/InputBox"
import {Button} from "../componenets/Button"
import {BottomWar} from "../componenets/BottomWar"

import axios from "axios"

export const SignIn = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center">
        <Heading label={"Sign In"}></Heading>
        <SubHeading label={"Enter your information to login to your account"}></SubHeading>

        <InputBox placeholder= " abc@gmail.com" label={"Email"}></InputBox>
        <InputBox placeholder= "123456" label={"Password"}></InputBox>
        <div className="pt-4">
          <Button label={"Sign In"} onClick={async () => {
             const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username,
                password
              });
              localStorage.setItem("token", response.data.token)
              navigate("/dashboard")
            }}></Button>
        </div>
        <BottomWar label={"Don't have an account?"} to={"/signup"} buttonText={"Sign Up"}></BottomWar>
      </div>
    </div>
  </div>
  )
}