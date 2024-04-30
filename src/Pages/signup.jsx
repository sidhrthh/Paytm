import Button from "../Component/Button";
import Heading from "../Component/Heading";
import Subheading from "../Component/Subheading";
import InputBox from "../Component/inputBox";
import Bottomwarning from "../Component/Bottomwarning";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

  return (
    <>
    <div className="flex justify-center pt-2">
      <div className="w-full max-w-sm p-4 rounded-lg shadow sm:p-6 md:p-8 bg-[#009be1] border-[#002d8b]">
        <form className="space-y-3" action="#">
          <Heading title={"Sign Up"} />
          <Subheading label={"Enter your infromation to create an account"} />
          <InputBox  label={"Firstname"} placeholder={"Tony"}/>
          <InputBox  label={"Lastname"} placeholder={"Stark"}/>
          <InputBox  label={"Email"} placeholder={"exmaple@gmail.com"}/>
          <InputBox  label={"Password"} placeholder={"12345678"}/>
          <Button label={"Sign Up"}  />
         <Bottomwarning label={"Already have an account"} buttonText={"Sign In"} to={"/signin"} />
        </form>
      </div>
      </div>
    </>
  );
}
