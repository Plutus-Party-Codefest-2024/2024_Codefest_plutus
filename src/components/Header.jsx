import React from 'react'
import { AiFillHome } from 'react-icons/ai'

export default function Header() {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <img src="https://onlineaccess.edwardjones.com/app/assets/edwardjones-logo-US.png" alt="" />
                <AiFillHome />
            </div>
            <div className='flex items-center gap-4'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </div>
        </div>
    )
}
