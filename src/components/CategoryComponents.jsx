import React, { useEffect, useState } from 'react'
import CategoryService from '../services/categoryService'
import { categoryHandler, currentCategoryHandler } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'


function CategoryComponents() {
    const [isActive, setIsActive] = useState(false);

    const { category } = useSelector(state => state.productStore);
    const dispatch = useDispatch();

    useEffect(() => {
        CategoryService.getAllCategory()
            .then(res => dispatch(categoryHandler(res.data)))
            .catch(err => console.log(err))
    }, [])

    function showCategoryHandler() {
        setIsActive(!isActive);
    }

    function handleCategory(cat) {

        dispatch(currentCategoryHandler(cat));
    }
    return (
        <div className='bg-grayLigth py-[20px]'>
            <div className='container mx-auto flex flex-col justify-center items-center md:flex-row gap-[20px]'>
                <button className='px-[24px] py-[12px] bg-mainBlue text-mainYellow rounded-lg' onClick={showCategoryHandler}>Category</button>

                <ul className='grid grid-cols-1 place-items-center  md:grid-cols-3 lg:grid-cols-5 gap-2 w-[100%]'>
                    {isActive && category.map((cat, index) => {
                        return <li key={index} className='bg-blue-300 px-[16px] py-[8px] w-[250px]  hover:bg-mainBlue rounded-lg hover:text-[#fff] text-center cursor-pointer transition-all' onClick={() => handleCategory(cat)} >{cat}</li>
                    })}
                </ul>

            </div>
        </div>
    )
}

export default CategoryComponents