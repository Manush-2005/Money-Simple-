import React from "react";

const NavBar = ()=>{
    return(
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight"onClick={()=>{
                window.location.href="/"
            }}>MoneySimple</span>
        </div>
        <div>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
            onClick={()=>{
                window.location.href="/login"
            }}>
                Login
            </button>
            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0 ml-2"
             onClick={()=>{
                window.location.href="/signup"
            }}>
                Sign Up
            </button>
        </div>
    </nav>
    );

};

export default NavBar;