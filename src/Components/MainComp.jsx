import { useState } from "react"

export default function Input(){
    const [password, setpassword] = useState(false)
    function handleShowPassword(){
        setpassword(!password)
    }
    return<>
    <div className="h-[70%] w-[19rem] relative  bg-gray-300 rounded-lg box-border p-9">
        <div>
            <p> <label htmlFor="Username">Username</label> </p>
            <p> <input  className="border-[1px] rounded-sm border-black border-t-0 border-l-0 border-r-0  p-1 w-[100%] outline-none focus:border-b-2 focus:border-black placeholder:text-[15px] placeholder:px-3  " placeholder="Phone Number or Email" name="Username" type="text" /> </p>
        </div>
        <div className="mt-3">
            <p>  <label htmlFor="Password">Password</label></p>
            <p> <input className="  border-[1px] rounded-sm border-black border-t-0 border-l-0 border-r-0 p-1 w-[100%] outline-none focus:border-b-2 focus:border-black placeholder:text-[15px] placeholder:px-3 " placeholder="Password" name="password" type={password ? "text" : "password" } /> </p>
        </div>
        <div className="mt-3">
            <p> <label htmlFor="Confirm-Password">Confirm-Password</label> </p>
            <p> <input className="border-[1px] rounded-sm border-black border-t-0 border-l-0 border-r-0 p-1 w-[100%] outline-none focus:border-b-2 focus:border-black placeholder:text-[15px] placeholder:px-4  " placeholder="Confirm-Password" name="password" type={password ? "text" : "password" } /> </p>
           <span> <button className="float-right w-[50px] border-[1px] border-black rounded-md m-2   " onClick={handleShowPassword}> {password ? 'hide' : 'Show' } </button></span>
        </div>
        <div>
            <p className="hover:underline text-slate-600  text-[14px] py-2 cursor-pointer ">Forgot Password ?</p>
        </div>

        <div>
            <button className="bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-gradient-to-r hover:from-amber-600 hover:to-pink-500  w-[70%]  rounded-3xl text-white text-lg  absolute bottom-20 py-1 left-10   ">Sign In</button>
        </div>
    </div>
    </>
}