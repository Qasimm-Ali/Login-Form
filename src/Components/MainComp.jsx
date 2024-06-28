import { useState } from "react";

export default function Input() {
  const [password, setpassword] = useState(false);
  function handleShowPassword() {
    setpassword(!password);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const res = Object.fromEntries(fd.entries());
    console.log(res);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className= " pb-20 w-[19rem] relative  bg-gray-300 rounded-lg box-border p-9">
        <div>
          <label htmlFor="Username">Username</label>
          <input
            autoComplete="on"
            className="border-[1px] rounded-sm border-black border-t-0 border-l-0 border-r-0  p-1 w-[100%] outline-none focus:border-b-[2px] focus:border-black placeholder:text-[15px] placeholder:px-3  "
            placeholder="Phone Number or Email"
            name="Username"
            id="Username"
            type="text"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="Password">Password</label>
          <input
            autoComplete="on"
            className="  border-[1px] rounded-sm border-black border-t-0 border-l-0 border-r-0 p-1 w-[100%] outline-none focus:border-b-[2px] focus:border-black placeholder:text-[15px] placeholder:px-3 "
            placeholder="Password"
            name="Password"
            id="Password"
            type={password ? "text" : "password"}
          />
        </div>
        <div className="mt-3">
          <label htmlFor="Confirmpassword">Confirm-Password</label>
          <input
            autoComplete="on"
            className="border-[1px] rounded-sm border-black border-t-0 border-l-0 border-r-0 p-1 w-[100%] outline-none focus:border-b-[2px] focus:border-black placeholder:text-[15px] placeholder:px-4  "
            placeholder="Confirm-Password"
            name="Confirmpassword "
            id="Confirmpassword"
            type={password ? "text" : "password"}
          />
          <span
            className="float-right w-[50px] border-[1px] border-black rounded-md m-2 px-1  cursor-pointer  "
            onClick={handleShowPassword}>
            {" "}
            {password ? "hide" : "Show"}
          </span>
        </div>
        <div>
          <p className="hover:underline text-slate-600  text-[14px] py-2 cursor-pointer ">
            Forgot Password ?
          </p>
        </div>

        <div>
          <button className="bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-gradient-to-r hover:from-amber-600 hover:to-pink-500  w-[70%]  rounded-3xl text-white text-lg  bottom-6 absolute  py-1 left-10   ">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}
