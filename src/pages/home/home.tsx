import React from 'react'
import { Link } from 'react-router-dom'
import Signin from '../signIn/signin';

export default function Home() {
  return (
    <div className='w-[100vw] h-auto min-h-[100vh]'>
        
        {/* Nav component */}
        <div className="w-full h-36 bg-[#468847]">
            <div className='w-full h-[35%] border-b-2 border-[#7cc07c] flex flex-row'>
                <div className='w-[50%] h-full flex flex-row justify-center items-center text-white'>
                    <p>Welcome to Green Market. Greens with ease</p>
                </div>

                <div className='w-[50%] h-full flex flex-row justify-center items-center text-white'>
                    <div>
                        <Link to={"/signin"}>Signin</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>  
  )
}
