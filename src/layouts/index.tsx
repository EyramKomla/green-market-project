import { useState } from 'react';
import {Input, Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
     Textarea } from "@headlessui/react";
import greensLogo from "../assets/Logo.png";
import { HeartIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, PhoneIcon, UserCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { JSX } from 'react/jsx-runtime';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PiHeadphonesLight, PiArrowsCounterClockwiseLight } from "react-icons/pi";
import SearchBar from '../components/SearchBar/SearchBar';
import CategoryNav from '../components/CategoryNav/CategoryNav';
import CartIcon from '../components/CartIcon/CartIcon';
import { categories } from '../config/categories';
import { SVGProps } from "react";
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { useAuth } from '../context/AuthContext';





export default function Layout() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (term: string) => {
        setSearchQuery(term);
        // You can add additional search logic here if needed
    };
    const handleMailClick = () => {
        window.location.href = "mailto:someone@example.com";
    };
    const categories = [
        {
            name: 'Fresh Vegetables',
            description: 'Local and organic vegetables, leafy greens, and roots',
            href: '/category/vegetables',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                </svg>
            )
        },
        {
            name: 'Fresh Fruits',
            description: 'Seasonal fruits, exotic fruits, and citrus',
            href: '/category/fruits',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            )
        },
        {
            name: 'Grains & Cereals',
            description: 'Rice, wheat, maize, and other grains',
            href: '/category/grains',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
            )
        },
        {
            name: 'Livestock Products',
            description: 'Meat, dairy products, and eggs',
            href: '/category/livestock',
            icon: (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>
            )
        },
        {
            name: 'Farm Supplies',
            description: 'Seeds, fertilizers, and farming tools',
            href: '/category/supplies',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082" />
                </svg>
            )
        },
        {
            name: 'Processed Foods',
            description: 'Preserved foods and value-added products',
            href: '/category/processed',
            icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
            )
        }
    ];

    const navigation = {
        route:[
            { name: 'Shop Product', link: '/shopProduct' },
            { name: 'Sell Product', link: '/sellProduct' },
            { name: 'Compare', link: '/compare' },
            { name: 'Customer Help', link: '/customerSupport' },
            { name: 'About us', link: '/about' },

        ],
        downloads:[
            {name:'Google Play',
                href:'#',
                icon:(props: JSX.IntrinsicAttributes &
                    React.SVGProps<SVGSVGElement>
                ) =>(
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="24"
                        height="24"
                        fill="currentColor"
                        role="img"
                        aria-label="Google Play Icon"
                        preserveAspectRatio="xMidYMid meet"
                        >
                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                    </svg>

                    
                )
            },
            {name:'App Store',
                href:'#',
                icon:(props: JSX.IntrinsicAttributes &
                    React.SVGProps<SVGSVGElement>
                )=>(
                    <svg 
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 384 512">
                        <path 
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                    </svg>
                )
            }
        ],
    social: [
        {
          name: 'Facebook',
          href: '#',
          icon: (
            props: JSX.IntrinsicAttributes &
              React.SVGProps<SVGSVGElement>
          ) => (
            <svg
              fill='currentColor'
              viewBox='0 0 24 24'
              {...props}
            >
              <path
                fillRule='evenodd'
                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                clipRule='evenodd'
              />
            </svg>
          ),
        },
        {
          name: 'Instagram',
          href: '#',
          icon: (
            props: JSX.IntrinsicAttributes &
              React.SVGProps<SVGSVGElement>
          ) => (
            <svg
              fill='currentColor'
              viewBox='0 0 24 24'
              {...props}
            >
              <path
                fillRule='evenodd'
                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                clipRule='evenodd'
              />
            </svg>
          ),
        },
        {
          name: 'X',
          href: '#',
          icon: (
            props: JSX.IntrinsicAttributes &
              React.SVGProps<SVGSVGElement>
          ) => (
            <svg
              fill='currentColor'
              viewBox='0 0 24 24'
              {...props}
            >
              <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
            </svg>
          ),
        },
      ],
    }        
    return(
        <div className="w-full font-light">  
            <div className="w-full bg-primary p-0.5 pt-2 items-center font-primary">
                
                <div className="px-16 text-xs flex text-white justify-between border-b border-green-50 pb-2.5 ">
                    <p className=" font-light ">Welcome to the Green Makert, greens with ease.</p>
                    <div className="flex gap-2">
                        <p>Follow us: </p>
                        <div className='flex space-x-4 md:order-3'>
                            {navigation.social.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className='text-white hover:text-dark'
                            >
                                <span className='sr-only'>{item.name}</span>
                                <item.icon
                                aria-hidden='true'
                                className='h-4 w-4'
                                />
                            </a>
                    ))}
                        <div className="flex space-x-3 border-l pl-3 ">
                           <div className="flex items-center text-white hover:text-dark">
                            <p>Eng</p>
                            <span><ChevronDownIcon className="w-3 h-3 pl-0.5 block" />
                            </span>
                           </div>
                            <div className="flex items-center text-white hover:text-dark">
                            <p>Ghs</p>
                            <span><ChevronDownIcon className="w-3 h-3 pl-0.5 block" />
                            </span>
                            </div>
                        </div>

                </div>

                    </div>
                </div>
                <div className="flex m-4 justify-between px-12" >
                    {/* logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <img 
                        alt="Green Makert Logo"
                        src={greensLogo}
                        className="h-14 w-34"
                        />
                    </div>    
                    {/* search area */}
                    <SearchBar onSearch={handleSearch} />
                    
                    {/* userprofile */}
                    <div className="flex items-center gap-3">
                        <CartIcon />
                        <HeartIcon color="white" width={24} height={24} className="hover:text-dark"/>
                        {useAuth().isAuthenticated ? (
                            <Popover className="relative">
                                <Popover.Button className="flex items-center focus:outline-none">
                                    <UserIcon color="white" width={24} height={24} className="hover:text-dark"/>
                                </Popover.Button>
                                <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                                    <div className="px-4 py-2 border-b">
                                        <p className="text-sm font-medium text-gray-900">{useAuth().user?.name}</p>
                                    </div>
                                    <Link
                                        to="/orders"
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        My Activities
                                    </Link>
                                    <button
                                        onClick={() => useAuth().logout()}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </Popover.Panel>
                            </Popover>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link 
                                    to="/login" 
                                    className="text-white hover:text-dark text-sm px-3 py-1 border border-white rounded-md"
                                >
                                    Login
                                </Link>
                                <Link 
                                    to="/signup" 
                                    className="text-white hover:text-dark text-sm px-3 py-1 bg-white/10 border border-white rounded-md"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>


                
                </div>
                
            </div>
            <div className="flex m-2 justify-between px-12">
            <div className="flex m-2 justify-between px-12">
              <PopoverGroup className="flex gap-x-12">
                <CategoryNav />
              </PopoverGroup>
            </div>
            </div>
                
               
            <Breadcrumb />
            <Outlet />
            
            <footer className='text-white p-3 bg-primary'>
                {/* Top footer element */}
                <div className="flex items-center justify-between px-4 sm:px-8 md:px-20 lg:px-48">
                    {/* contact info */}
                    <div className=" text-sm">
                        <div className="">
                            <img 
                            alt="Green Makert Logo"
                            src={greensLogo}
                            className="h-14 w-34"
                            />
                        </div>
                        <div>
                            <p className="text-stone-300">Customer support</p>
                            <p>+233 20 500 3251</p>
                            <p className="text-stone-300">Computer Science 3 </p>
                            <p className="text-stone-300"> Group 54</p>
                            <button onClick={handleMailClick} className=" hover:text-dark">
                                info@greenmakert.com
                            </button>
                        </div>

                    </div>
                    {/* link shortcuts */}
                    <div>
                        <p className="font-bold ">Quick Links</p>
                        {navigation.route.map((item)=>(
                            <div className=" flex-col flex">
                            <Link 
                            key={item.name}
                            to={item.link} className="text-stone-400 hover:text-dark">
                                {item.name}
                                </Link>
                            </div>
                            
                        ))}
                        
                    </div>
                    {/* download Options */}
                    <div className="flex flex-col gap-y-1 text-sm font-extralight ">
                        <p className="font-normal self-center">Download App</p>
                        {navigation.downloads.map((item) =>(
                            <a 
                            className=" py-2 px-6 bg-dark rounded-sm" 
                            key={item.name}
                            href={item.href}>
                           
                            
                            <div className="flex gap-x-2 items-center">
            
                            <item.icon className="h-12 w-10"/>
                           
                                <div className="gap-y-0.5">
                                    <p className="">Get it now</p>
                                    <p className="font-bold" >{item.name}</p>
                                </div>
                            </div>

                        </a>
                        ))}
                        
                        
                    </div>
                </div>
                <div className='mt-8 border-t border-gray-900/20 pt-8 flex items-center flex-col'>
                <div className='order-2  gap-5 hidden lg:flex'>
                    <Link to='/terms'>Term of Use</Link>
                    <Link to='/privacy'>Privacy Policy</Link>
                </div>

                <p className='text-xs leading-5 text-gray-900'>
                    &copy; 2025 Green Makert.
                </p>
                </div>

                <div className='order-2  gap-5 flex justify-center pt-5 lg:hidden'>
                <Link to=''>Term of Use</Link>
                <Link to=''>Privacy Policy</Link>
                </div>
            </footer>
        </div>   
    )
}
