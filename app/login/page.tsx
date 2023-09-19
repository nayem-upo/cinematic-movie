"use client"
import React, { useState } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

const page = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if (!email || !password) {
            setError("All field are required");
            return;
        }
        try {
            const res = await signIn("credentials", {
                email, password, redirect: false
            })

            if (res?.error) {
                setError("Invalid credentials");
                return;
            }
            router.replace("/dashboard")
        } catch (error) {
            console.log("Error during login", error);
        }
    }

    return (
        <div>
            <Header></Header>
            <div
                className='min-h-screen'
                style={{
                    backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dcvqzzo-079fc1d0-1d41-4add-a0f6-a32018b7c17d.jpg/v1/fill/w_1192,h_670,q_70,strp/2018_movie_posters__8th_edition_by_thekingblader995_dcvqzzo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUyOThiYWMwLWI4YmYtNGM4MC1hZjY3LTcyNWMxMjcyZGJiMFwvZGN2cXp6by0wNzlmYzFkMC0xZDQxLTRhZGQtYTBmNi1hMzIwMThiN2MxN2QuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.3Z-pjudO8DU8ebkq5_mDqnZE6ogWTD7_jxj3xY_1VEo")`,
                    backgroundSize: 'cover',
                    position: 'relative',
                }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    className='bg-[#212121e5] z-0'
                ></div>

                <div className="p-8 lg:w-1/2 mx-auto">
                    <div className="rounded-t-lg px-8 py-0">
                        <div className='flex items-center justify-center space-x-4 mt-3 flex-col'>
                            <p className="text-center text-white z-40 text-2xl font-semibold">Sign In</p>
                            <div className="flex items-center justify-center space-x-4 mt-3">
                                <button
                                    className="hover:bg-[#FCCB08] w-full bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150 flex items-center border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-6 h-6 mr-3">
                                        <path
                                            fillRule="evenodd"
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                        ></path>
                                    </svg>
                                    Github
                                </button>
                                {/* google sin in button  */}
                                <button
                                    onClick={() => signIn("google")}
                                    className="hover:bg-[#FCCB08] w-full bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150 flex items-center border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-3" viewBox="0 0 48 48">
                                        <path
                                            fill="#fbc02d"
                                            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                                        />
                                        <path
                                            fill="#e53935"
                                            d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                                        />
                                        <path
                                            fill="#4caf50"
                                            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                                        />
                                        <path
                                            fill="#1565c0"
                                            d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                                        />
                                    </svg>
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#6564661f] rounded-b-lg px-4 lg:px-24 text-white">
                        <form onSubmit={handleSubmit} className="mt-6">
                            <div className="relative mt-3">
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    className="appearance-none pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-white leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Email"
                                />
                                <div className="absolute left-0 inset-y-0 flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 ml-3 text-gray-400 p-1"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                        />
                                        <path
                                            d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className="relative mt-3">
                                    <input
                                        onChange={e => setPassword(e.target.value)}
                                        className="appearance-none pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-white leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Password"
                                    />
                                    <div className="absolute left-0 inset-y-0 flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-7 w-7 ml-3 text-gray-400 p-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className='flex pt-2 justify-between px-1'>
                                    <p>Havn't any account?</p>
                                    <Link href="/register" className='hover:text-[#FCCB08] duration-150 underline'>Register</Link>
                                </div>
                                {/* error massage */}
                                {error &&
                                    <div className='p-1'>
                                        <p className='text-red-500 text-xs'>{error}</p>
                                    </div>
                                }
                            </div>
                            <div className="flex flex-col items-center justify-center mt-8">
                                <button
                                    className="hover:bg-[#FCCB08] bg-white text-black text-xs font-semibold uppercase px-5 py-[8px] rounded duration-150 flex items-center border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
                                >
                                    LOGIN Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <MenuBar></MenuBar> */}
        </div>
    );
};

export default page;