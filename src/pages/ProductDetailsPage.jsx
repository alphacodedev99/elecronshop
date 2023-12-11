import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductService from '../services/productService';

// icons
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function ProductDetailsPage() {

    const [product, setProduct] = useState({});
    const [currentImage, setCurrentImage] = useState(0);
    const [value, setValue] = useState(1);

    let { id } = useParams();

    useEffect(() => {

        ProductService.getSingleProduct(id)
            .then(res => {
                setProduct(res.data)
                setValue(res.data.rating)
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='h-[100vh]'>
            <div className='container mx-auto flex mt-[50px] gap-[20px]'>
                {/* images */}
                <div className='w-[50%] flex flex-col'>
                    <img src={product.images?.[currentImage]} alt="" className='w-full h-[500px] object-cover border-2 border-mainBlue p-3 rounded-[20px]' />

                    <div className='flex items-center justify-between mt-[20px]'>
                        {product.images?.map((img, index) => {
                            return <img src={img} className='w-[100px] h-[100px] border border-mainBlue p-2 rounded-[20px] cursor-pointer' onClick={() => setCurrentImage(index)} />
                        })}
                    </div>
                </div>
                {/* description */}
                <div className='w-[50%]'>
                    <div className='flex flex-col gap-3'>

                        <div className='flex flex-col'>
                            <h3 className='text-2xl text-mainBlue font-bold'>{product.title}</h3>
                            <p className='text-xl'>${product.price}</p>
                        </div>

                        <div className='flex items-center'>
                            <p>Rating:</p>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='flex items-center gap-[10px]'>
                            <p>Availability: </p>
                            {product.stock >= 1 ?
                                <div className='flex items-center gap-2 text-green-500'>
                                    <FaCheck size={24} /> <span>In Stock</span>
                                </div>
                                :
                                <div className='flex items-center  text-red-500'>
                                    <RxCross2 size={28} /> <span>Out Of Stock</span>
                                </div>}
                        </div>

                        <h3>Hurry up! only <span className='font-bold'>{product.stock}</span> product left in stock!</h3>
                    </div>

                    <div >
                        <h3>Total Price: ${product.price}</h3>
                        <div className='flex items-center'>
                            <p>Quantity:</p>
                            <button>+</button>
                            <span>0</span>
                            <button> - </button>
                        </div>

                        <div>
                            <Link to='/'>Add To Cart</Link>
                            <Link to='/'><CiHeart /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPage