"use client";

import Link from 'next/link';
import { User, Bolt, ShoppingBag } from 'lucide-react';

export default function Nav() {

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
                        <div>
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
                    <div className='flex flex-row gap-5'>
                        <Link href="/panier" className="text-white hover:text-yellow-500">
                        <ShoppingBag size={20}/>
                        </Link>
                        <Link href="/login" className='text-white hover:text-yellow-500'>
                        <User size={20}/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}
