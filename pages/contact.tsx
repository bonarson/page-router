import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

const Page = () => {
  const [name, setName] = useState("");
  const[mail,setMail]=useState("");
  const[phone,setPhone]=useState("");
  const[message,setMessage]=useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleChangeMail =(e:ChangeEvent<HTMLInputElement>)=>{
    setMail(e.target.value);
  }
  const handleChangePhone =(e:ChangeEvent<HTMLInputElement>)=>{
    setPhone(e.target.value);
  }
  const handleChangeMessage =(e:ChangeEvent<HTMLInputElement>)=>{
    setMessage(e.target.value);
  }
  

  return (
    <div>
      <div>Enter your name</div>
      <p>
        <input type="text" name="" id="name" onChange={handleChangeName} />
      </p>
      <div>Enter your email </div>
      <p>
        <input type="mail" name="mail" id="mail" onChange={handleChangeMail} />
      </p>
      <div>Enter your number phone</div>
      <input type="text" name="phone" id="phone" onChange={handleChangePhone} />

      <div>your message</div>
      <input type="text" name="message" id="message" onChange={handleChangeMessage}  />

     
        <button onClick={log} >submit</button>
      
    </div>
  );
  function log():void{
    console.log(`name :${name} et mail : ${mail} et phone : ${phone} , message : ${message}`);
    };
};


export default Page;
