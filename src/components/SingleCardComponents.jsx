import React from 'react'

function SingleCardComponents({ product }) {
    return (
        <div className='w-[200px]'>
            <img src={product.thumbnail} alt="" />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    )
}

export default SingleCardComponents