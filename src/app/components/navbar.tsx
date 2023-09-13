"use client"

import React from 'react';
import { Dropdown, Navbar } from 'flowbite-react';
import './../../css/navbar.css'
import { ModeToggle } from '@/components/global/ModeToggle';

const navbar = () => {
    return (
        <div className='fixed w-full'>

            <Navbar
                fluid={true}
                rounded={true}
                className='bg-transparent dark:bg-transparent'
            >
                <Navbar.Brand>
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 lg:h-14 lg:w-14 md:h-10 md:w-10"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-2xl md:text-xl font-semibold dark:text-white">
                        NSM
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    <Navbar.Link
                        href="/"
                        // active={true}
                        className='lg:text-lg md:text-sm leading-none font-normal tracking-wide text-zinc-950 dark:text-slate-300'
                    >
                        Home
                    </Navbar.Link>

                    <Navbar.Link
                        href="/"
                        // active={true}
                        className='lg:text-lg md:text-sm leading-none font-normal tracking-wide text-zinc-950 dark:text-slate-300'
                    >
                        Games
                    </Navbar.Link>

                    <Navbar.Link
                        href="/"
                        // active={true}
                        className='lg:text-lg md:text-sm leading-none font-normal tracking-wide text-zinc-950 dark:text-slate-300'
                    >
                        Anime
                    </Navbar.Link>

                    <Navbar.Link
                        href="/"
                        // active={true}
                        className='lg:text-lg md:text-sm leading-none font-normal tracking-wide text-zinc-950 dark:text-slate-300'
                    >
                        Reviews
                    </Navbar.Link>

                    <Navbar.Link
                        href="/"
                        // active={true}
                        className='lg:text-lg md:text-sm leading-none font-normal tracking-wide text-zinc-950 dark:text-slate-300'
                    >
                        News
                    </Navbar.Link>

                    <div className="relative mt-1 search-bar">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 lg:text-lg md:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <ModeToggle />

                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default navbar;