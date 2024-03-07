import React from 'react'
import star_fill from '/img/Star_fill.svg'
import star from '/img/Star.svg'

const Card = ({ value }) => {
    return (
        <div className='flex flex-col gap-3'>
            <figure className='relative'>
                {value.isPopular &&
                    <p className=' absolute font-Montserrat text-xs px-2 py-1 text-black-1 bg-yellow-popular rounded-full top-3 left-4'>Popular</p>
                }
                <img className='rounded max-h-36 w-full object-cover object-center' src={value.image} alt='Imagen' />
            </figure>

            <div className='flex justify-between'>
                <p className='text-white font-Montserrat'>{value.name}</p>
                <p className='font-Montserrat text-xs px-2 py-1 text-black-1 bg-apple-green rounded'>{`$ ${value.pricing}`}</p>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-1 items-center justify-between'>
                    {value.votes === 0 ? (
                        <>
                            <img src={star} alt='star icon' className='h-5 w-5' />
                            <p className='font-Montserrat text-text-white opacity-65'>No ratings</p>
                        </>
                    ) : (
                        <>
                            <img src={star_fill} alt='star icon' className='h-5 w-5' />
                            <p className='text-white font-Montserrat'>{value.rating}</p>
                            <p className='font-Montserrat text-text-white opacity-65'>{`(${value.votes} votes)`}</p>
                        </>
                    )}

                </div>
                {value.isSoldOut &&
                    <p className='text-red-error font-Montserrat'>Sold Out</p>
                }
            </div>
        </div>
    )
}

export default Card
