import React from 'react'
import start_fill from '/img/Star_fill.svg'

const Card = () => {
    return (
        <div className='flex flex-col gap-4'>
            <figure className='relative'>
                <p className=' absolute font-Montserrat text-xs px-2 py-1 text-black-1 bg-yellow-popular rounded-full top-3 left-4'>Popular</p>
                <img className='rounded max-h-36 w-full object-cover object-center' src='https://images.unsplash.com/photo-1534687941688-651ccaafbff8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Imagen'/>
            </figure>

            <div className='flex justify-between'>
                <p className='text-white font-Montserrat'>House Coffee</p>
                <p className='font-Montserrat text-xs px-2 py-1 text-black-1 bg-apple-green rounded'>$3.50</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-1 items-center justify-between'>
                    <img src={start_fill} alt='star icon' className='h-5 w-5'/>
                    <p className='text-white font-Montserrat'>4.85</p>
                    <p className='font-Montserrat text-text-white opacity-65'>(14 votes)</p>
                </div>
                    <p className='text-red-error font-Montserrat'>Sold Out</p>
            </div>
        </div>
    )
}

export default Card
