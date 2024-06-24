export default function Input(){
    return<>
    <div className="h-[70%] w-72  bg-white rounded-md box-border p-9">
        <div>
            <p> <label htmlFor="Username">Username</label> </p>
            <p> <input className="border-[1px] border-black p-1" type="text" /> </p>
        </div>
        <div>
            <p> <label htmlFor="Password">Password</label> </p>
            <p> <input className="border-[1px] border-black p-1" type="password" /> </p>
        </div>
        <div>
            <p> <label htmlFor="Confirm-Password">Confirm-Password</label> </p>
            <p> <input className="border-[1px] border-black p-1" type="password" /> </p>
            <button>Show</button>
        </div>

        <div className=" ">
            <button className="bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-gradient-to-r hover:from-amber-600 hover:to-pink-500  py-1 px-8 rounded-3xl text-white text-lg  ">Sign In</button>
        </div>
    </div>
    </>
}