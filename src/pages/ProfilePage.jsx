import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProfilePage() {

    const { user } = useSelector(state => state.userStore);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {

        // brisanje user-a;
        dispatch(clearUser())
        toast.error('User is logout now!');
        navigate('/login');

    }

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col items-center justify-center mt-[50px]'>
                <img src={user.image} alt='' className='w-[200px] rounded-full border-2 border-mainBlue' />

                <h2 className='text-xl font-bold text-mainBlue'>{user.firstName}</h2>
                <h2 className='text-xl font-bold text-mainBlue'>{user.lastName}</h2>

                <button className='px-[24px] py-[12px] bg-mainBlue text-grayLigth rounded-lg mt-[50px]' onClick={handleLogout}>LogOut</button>


            </div>
        </div>
    )
}

export default ProfilePage