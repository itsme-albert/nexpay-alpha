"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function Home() {
 
    const [pin, setPin] = useState<string>("");
    const [showError,setShowError] = useState<boolean>(false);
  
    const handleClick = (num: string) => {
      if (pin.length < 4) setPin(pin + num);
    };
  
    const handleClear = () => {
      setPin("");
    };

    const checkPin = () => {
      if(pin === "1234"){
        alert("Correct Pin")
      }else{
        setShowError(true);
      }
    } 
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img src="signuplogo.png" className="mb-1 w-32 h-auto"/>
        <div className="bg-gray-200 rounded-3xl p-6 w-80 shadow-lg">
          <div className="text-center mb-6">
            <div className="relative bg-slate-200 rounded-full py-2 px-4 mb-2 text-sm text-blue-700 font-semibold">
             <Button className="bg-blue-200 rounded-full py-6 px-10 text-blue-800 text-xs">Email / Phone Number
             </Button>
             <p className="-mt-4 ms-14 absolute text-[10px] text-red-400 italic">
              unregistered phone or email
            </p>
             <p>
              <img src="arrow-left-right.svg" className="absolute -mt-7.5 ms-47 w-5 h-auto"/>
             </p>
            </div>
          
          </div>
  
          <div className="flex justify-center gap-4 mb-6 bg-gray-200">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-10 h-12 border-2 border-gray-400 rounded-lg text-center text-2xl font-bold"
              >
                {pin[i] ? "*" : ""}
              </div>
            ))}
          </div>
  
          <div className="grid grid-cols-3 gap-4 text-center text-2xl text-blue-900 font-bold bg-gray-200 px-12">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
              <Button
                key={num}
                onClick={() => handleClick(num)}
                className="py-4 bg-gray-200 rounded-xl hover:bg-gray-100 text-blue-900 font-bold text-3xl "
              >
               {num} 
              </Button>
            ))}
             
          </div>
          <div className="col-span-2 grid grid-cols-3 gap-4 mt-4 bg-gray-200 px-12">
                <Button 
                  onClick={() => handleClick("0")}
                  className="py-4 bg-gray-200 rounded-xl hover:bg-gray-100 text-blue-900 col-start-2 font-bold text-3xl"
                >
                  0
                </Button>
                <Button className="py-4 bg-gray-200 rounded-xl hover:bg-gray-100 text-blue-900" onClick={handleClear}>Clear</Button>
            </div>    
  
          <div className="text-center mt-4">
            <Button className="text-xs text-blue-900 mb-2 bg-gray-200 hover:bg-gray-100">
              Forgot PIN
            </Button>
            <Button 
              className="block w-full text-3xs text-blue-900 py-2 px-1 rounded-full mt-2 bg-gray-200 hover:bg-gray-100 font-bold"
              onClick={(checkPin)}  
            >
              Sign In
            </Button>
          </div>
  
      
          <div className="flex justify-between items-center mt-6 -mx-2">
            <Button className="text-xs text-black bg-gray-200 hover:bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1 shadow-1xs">
              <span className=" w-3 h-3 rounded-full"><img src="fbicon.png"/></span> Sign in with Facebook
            </Button>
            <Button className="text-xs text-black bg-gray-200 hover:bg-gray-100 px-2 py-1 rounded-full flex items-center gap-1 shadow-1xs">
              <span className="w-3 h-3 rounded-full"><img src="gmailLogo.png"/></span> Sign in with Google
            </Button>
          </div>
        </div>
        {showError &&(
          <div className="absolute -ms-[800px]">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center w-80 border-4 border-gray-200">
              <p className="font-bold text-black text-lg mb-2">Incorrect PIN.</p>
              <p className="text-black mb-4">You've entered an incorrect PIN, please try again.</p>
              <Button className="w-40 bg-blue-900 rounded-full" onClick={() => setShowError(false)}>Close</Button>
            </div>
          </div>
        )}
      </div>
    );
}

