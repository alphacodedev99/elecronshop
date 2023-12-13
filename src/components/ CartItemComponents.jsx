import React from 'react'
import { useDispatch } from 'react-redux'
import { setPriceHandler } from '../store/cartSlice';

function CartItemComponents({ item, index }) {

    const dispatch = useDispatch();

    return (
        <div className='flex items-center justify-between gap-4 w-full'>
            <img src={item.thumbnail} alt={item.title} className='w-[100px] h-[100px]' />
            <div>
                <p>{item.title}</p>
                <p>{item.category}</p>
            </div>

            <h3>${item.price}</h3>

            <div>
                <button className='px-[8px] py-[4px] bg-slate-400' onClick={() => dispatch(setPriceHandler({ increment: 1, index }))}>+</button>
                <span className='px-[8px] py-[4px] bg-slate-400'>{item.count}</span>
                <button className='px-[8px] py-[4px] bg-slate-400' onClick={() => dispatch(setPriceHandler({ increment: -1, index }))}> - </button>
            </div>

            <h3>${item.cartTotal}</h3>
        </div>
    )
}

export default CartItemComponents