import React, { useState, ChangeEvent } from "react";
import Link from "next/link";

const Page = () => {
  const [id, setId] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  return (
    /*<div>
      <div>Enter your email </div>
      <p>
        <input type="text" name="" id="id" onChange={handleChange} />
      </p>
      <div>Enter your password </div>
      <p>
        <input type="password" name="" id="password" />
      </p>

      <Link href={`/articles/${id}`}>
        <button>Login</button>
      </Link>
    </div>
    */
   <div></div>
  );
};

export default Page;
