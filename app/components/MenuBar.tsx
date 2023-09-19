"use client"
import Link from 'next/link';
import React from 'react';
import { useSession } from "next-auth/react";
interface MenuBarProps {
    session: any;
}

const MenuBar: React.FC<MenuBarProps> = () => {
    const { data: session } = useSession();
    return (
        <div className="drawer drawer-end z-50 max-w-7 mx-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="p-8 w-72 h-full bg-[#080808] text-white">
                    {/* Sidebar content here */}
                    <h1>MENU</h1>
                    <div className='text-center'>
                        <div className='p-[0.1px] bg-[#56565682] mt-2'></div>
                        {
                            !session ?
                                <Link href="/login"><li className='mt-3 mb-6'><button className='hover:bg-[#FCCB08] w-full bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150'>Log into account</button></li></Link>
                                :
                                <Link href="/logout"><li className='mt-3 mb-6'><button className='hover:bg-[#FCCB08] w-full bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150'>Log Out</button></li></Link>
                        }
                        <div className='p-[0.1px] bg-[#56565682] my-7'></div>
                        <div className='flex flex-col gap-7'>
                            <Link href="/"><li className='cursor-pointer hover:text-[#FCCB08] text-xs duration-150 uppercase'>Home</li></Link>
                            <li className='cursor-pointer hover:text-[#FCCB08] text-xs duration-150 uppercase'>Cinemas</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] text-xs duration-150 uppercase'>Privilege</li>
                            <li className='cursor-pointer hover:text-[#FCCB08] text-xs duration-150 uppercase'>Movie Library</li>
                            <Link href="/about"><li className='cursor-pointer hover:text-[#FCCB08] text-xs duration-150 uppercase'>About us</li></Link>
                            <li className='cursor-pointer hover:text-[#FCCB08] text-xs duration-150 uppercase'>Contact</li>
                        </div>
                    </div>
                </ul>
            </div >
        </div >
    );
};

export default MenuBar;