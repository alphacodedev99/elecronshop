import React from 'react'
import { Link } from 'react-router-dom'

function SingleCardComponents({ product }) {
    return (
        <div className='flex flex-col w-[300px] border border-mainBlue p-3 rounded-[20px]'>
            <img src={product.thumbnail} alt={product.title} className='w-[300px] h-[200px] rounded-[20px] object-cover' />

            <div className='flex flex-col grow'>
                <h3 className='text-center mt-2 font-bold'>{product.title}</h3>
                <p className='mb-5 text-center'>${product.price}</p>
                <p className='text-[14px] flex grow'>{product.description.slice(0, 60)}...</p>
            </div>

            <Link
                to={`/productDetails/${product.id}`}
                className='px-5 py-2 bg-mainBlue text-[#fff] rounded-full text-center mt-[10px] hover:scale-105 transition-all duration-500'
            >See More</Link>

        </div>
    )
}

export default SingleCardComponents