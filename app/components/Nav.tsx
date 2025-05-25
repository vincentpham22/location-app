"use client";

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X, Bolt } from 'lucide-react';
import { Button } from '../../components/ui/button';

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Hotels', href: '../../hotels' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <nav className='bg-gray-800 bg-opacity-75 top-0 left-0 w-full z-10 flex items-center justify-between p-4'>
            <div className='w-full'>
                <div className='flex items-center justify-between h-16'>
                    <div className="flex items-center">
                        <div className="flex-shrink-0 text-white">
                            <Bolt/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4 text-white">
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="hover:text-yellow-500">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/" className='text-white hover:text-yellow-500'>
                        <User size={20}/>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <Button onClick={toggleMenu} className="bg-transparent shadow-none z-[50]">
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </Button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute right-0 top-0 w-[300px] p-2 h-screen bg-gray-900 text-white">
                    <div className="flex flex-col space-y-4 px-2 pt-20">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.href} className='hover:text-yellow-500'>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>

    )
}
