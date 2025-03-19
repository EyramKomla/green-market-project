import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './signin'
import { FaArrowRight, FaFacebook, FaHeadphones, FaHeadphonesAlt, FaHeadset, FaInstagram, FaPhone, FaPinterest, FaReddit, FaRegHeart, FaSellcast, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { LuUserRound } from 'react-icons/lu'
import Dropdown from '../components/dropdown'
import { FaCodeCompare, FaShop } from 'react-icons/fa6'
import NavButton from '../components/navButton'
import { BiChat, BiMedal, BiTrophy } from 'react-icons/bi'
import { CgCreditCard } from 'react-icons/cg'
import { BsChatLeftDots, BsHeadset } from 'react-icons/bs'

export default function Home() {
  return (
    <div className='w-[100vw] h-auto min-h-[100vh]'>
        
        {/* Nav component */}
        <div className="w-full h-36 p-0 bg-[#468847]">
            <div className='w-full h-[35%] border-b-2 border-[#7cc07c] flex flex-row'>
                <div className='w-[50%] h-full flex flex-row justify-center items-center text-white'>
                    <p className='text-xs'>Welcome to Green Market. Greens with ease <Link to={"/signin"}>Signin</Link></p>
                </div>

                <div className='w-[50%] h-full flex flex-row justify-center items-center text-white'>
                    <div className='flex flex-row justify-center item border-r-2 border-r-[#7cc07c]'>
                        <p className='pr-2 text-xs'>Follow us:</p>
                        <a href='#' className='mr-2'><FaTwitter size={14}/></a>
                        <a href='#' className='mr-2'><FaFacebook size={14}/></a>
                        <a href='#' className='mr-2'><FaPinterest size={14}/></a>
                        <a href='#' className='mr-2'><FaReddit size={14}/></a>
                        <a href='#' className='mr-2'><FaYoutube size={14}/></a>
                        <a href='#' className='mr-2'><FaInstagram size={14}/></a>
                    </div>

                    <div className='h-[100%] w-28 flex flex-row justify-around items-center'>
                        <p className='text-xs'>ENG</p>
                        <p className='text-xs'>GHS</p>
                    </div>
                </div>
            </div>
            <div className='w-[70%] h-[65%] m-auto flex flex-row items-center justify-between'>
                <div className='w-50 h-[50%] flex justify-center items-center'>
                    <img src='src/assets/project-logo.png' className='h-full'/>
                </div>
                <div className="w-90 m-auto flex items-center border border-green-600 rounded-md p-2 bg-white">
                    <input
                        type="text"
                        placeholder="Search for anything..."
                        className="flex-grow outline-none px-2 bg-transparent text-gray-600"
                    />
                    <CiSearch className="text-gray-600" size={20} />
                </div>
                <div className='w-50 h-[50%] flex flex-row justify-center items-center'>
                    <FaRegHeart size={22} className='mr-4 text-white'/>
                    <LuUserRound size={22} className='text-white'/>
                </div>
            </div>
        </div>

        {/*Customer Support*/}
        <div className='w-full h-14 border-b-2 border-b-gray-200'>
            <div className='h-full w-[70%] m-auto flex flex-row'>    
                <div className='w-[50%] h-full flex flex-row justify-center items-center'>
                    <Dropdown options={["Poultry", "Fruits", "Vegetables", "Processed Foods"]} menuName={"Categories"}/>
                    <Link>
                        <div className='w-auto min-w-20 m-1 h-8 text-gray-500 p-1 flex flex-row gap-2 justify-center items-center text-xs'>
                            <FaCodeCompare size={12}/>
                            <p>Compare</p>
                        </div>
                    </Link>
                    <Link>
                        <div className='w-auto min-w-20 m-1 h-8 text-gray-500 p-1 flex flex-row gap-2 justify-center items-center text-xs'>
                            <FaHeadset size={12}/>
                            <p>Customer Support</p>
                        </div>
                    </Link>
                    <Link>
                        <div className='w-auto min-w-20 m-1 h-8 text-gray-500 p-1 flex flex-row gap-2 justify-center items-center text-xs'>
                            <FaShop size={12}/>
                            <p>Sell Item</p>
                        </div>
                    </Link>
                </div>
                <div className='w-[50%] h-full flex flex-row justify-end items-center text-right p-2 gap-3'>
                    <FaPhone size={16}/>
                    <p className='text-sm'>+233 20 500 3251</p>
                </div>
            </div>
        </div>

        {/*Main Content*/}
        <div className='w-[70vw] h-auto min-h-[90vh] m-auto mt-24'>
            
            {/*Deals*/}
            <div className='w-full h-100 flex flex-row gap-5'>

                {/*Left Div*/}
                <div className='h-full w-[60%]'>

                    <div className='h-10 w-full mb-5 flex flex-row gap-3'>
                        <p className='italic font-bold flex justify-center items-center text-lg'>Best Deals</p>
                        <p className='italic text-xs flex items-center font-medium text-gray-500'>Deal ends in</p>
                        <div className='h-[80%] m-auto ml-0 w-36 bg-[#FCE76C]'></div>
                    </div>

                    <div className='h-85 w-full bg-[url(src/assets/NGUVU-3.jpeg)] flex flex-col justify-center bg-bottom bg-cover bg-no-repeat backdrop-opacity-5 relative'>
                    {/* Overlay for filter effect */}
                    <div className='absolute inset-0 bg-white/50'></div>
                    {/* Content */}
                        <div className='relative z-10 text-white px-16 gap-4 flex flex-col'>
                            <p className='w-full h-10 text-3xl italic font-semibold text-black'>Fruits</p>
                            <p className='w-full h-10 text-sm text-gray-800'>Save up to 50% on naturally grown fruits</p>
                            <NavButton text="SHOP NOW"/>
                            
                        </div>
                    </div>
                </div>

                {/*Right Div*/}
                <div className='h-full w-[40%] flex flex-col justify-between'>
                    <div className='h-[10%] w-full flex flex-row justify-end items-center gap-4 text-blue-400 italic text-sm'>
                        
                        <Link><p>Browse All Products</p></Link>
                        <FaArrowRight size={10}/>
                    </div>
                    <div className='h-[40%] w-full bg-black rounded-[5px] flex flex-row'>
                        <div className='w-[50%] h-full flex flex-col gap-2 px-4 py-4'>
                            <p className='text-sm text-[#c1b050] italic'>MARCH SALES</p>
                            <p className='italic font-bold text-white text-lg'>Pineapple</p>
                            <NavButton text="BUY NOW"/>
                        </div>
                        <div className='w-[50%] h-full flex flex-col gap-3 px-10 py-3'>
                            <div className='w-full h-7 bg-[#d5c25a] rounded-sm flex justify-center items-center'>
                                <p className='font-bold italic'>29% OFF</p>
                            </div>

                        </div>
                    </div>
                    <div className='h-[40%] w-full bg-[#F2F4F5] rounded-[5px] flex flex-row'>
                        <div className='w-[50%] h-full flex flex-col gap-3 px-10 py-3'>
                            

                        </div>
                        <div className='w-[50%] h-full flex flex-col gap-2 px-4 py-4'>
                            <p className='text-black font-bold italic text-lg'>Banana</p>
                            <p className='italic font-medium text-blue-400 text-lg'>GHC 15</p>
                            <NavButton text="BUY NOW"/>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/*Credibility*/}
            <div className='w-180 h-20 mx-auto my-8 border-2 border-gray-100 rounded-sm flex flex-row justify-center items-center'>
                <div className='w-[28%] h-[80%]  flex flex-row justify-center items-center gap-2'>
                    <BiTrophy size={25} color='#6a7282'/>
                    <div className='h-full w-[80%] flex flex-col text-xs justify-center gap-1'>
                        <p className='font-bold italic'>24 HOURS RETURN</p>
                        <p className='font-light italic text-gray-500'>100% money back guarantee</p>
                    </div>
                </div>
                <div className='w-[28%] h-[80%] flex flex-row justify-center items-center gap-2 border-r-2 border-l-2 border-l-gray-100 border-r-gray-100'>
                    <BsChatLeftDots size={25} color='#6a7282'/>
                    <div className='h-full w-[80%] flex flex-col text-xs justify-center gap-1'>
                        <p className='font-bold italic'>SECURE CHAT</p>
                        <p className='font-light italic text-gray-500'>Your conversations are safe</p>
                    </div>
                </div>
                <div className='w-[28%] h-[80%] flex flex-row justify-center items-center gap-2'>
                    <FaHeadphonesAlt size={25} color='#6a7282'/>
                    <div className='h-full w-[80%] flex flex-col text-xs justify-center gap-1'>
                        <p className='font-bold italic'>SUPPORT 24/7</p>
                        <p className='font-light italic text-gray-500'>Live contact/message</p>
                    </div>
                </div>
            </div>

            {/*Shopping category*/}
            <div className='min-w-full h-100 flex flex-row'>
                <div className='w-[20%] h-full border-1 border-gray-100'></div>
                <div className='w-[80%] h-full flex flex-wrap'>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                    <div className='w-[25%] h-[50%] flex flex-col px-4 pt-2 gap-1 border-1 border-gray-100'>
                        <div className='w-35 h-30 mx-auto'></div>
                        <p className='text-sm italic'>Lorem Ipsum</p>
                        <p className='text-blue-400 italic'>$2,300</p>
                    </div>
                </div>
            </div>

        </div>
    </div>  
  )
}
