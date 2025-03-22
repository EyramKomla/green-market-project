import { useState } from 'react';
import { BiShowAlt } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Reset Password</h2>
      </div>
      
      <form className="space-y-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-2 border rounded-md"
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)} 
            className="absolute right-2 top-2.5 text-gray-500 items-center"
          >
            {showPassword ? <GrFormViewHide className='w-6 h-8' /> : <BiShowAlt className='w-6 h-8' />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full p-2 border rounded-md"
          />
          <button 
            type="button" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className="absolute right-2 top-2.5 text-gray-500 items-center"
          >
            {showConfirmPassword ? <GrFormViewHide className='w-6 h-8' /> : <BiShowAlt className='w-6 h-8' />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#468847] text-white rounded-md hover:bg-[#3a7139]"
        >
          RESET PASSWORD
        </button>
      </form>
    </div>
  );
}