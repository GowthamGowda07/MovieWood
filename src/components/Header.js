import React, {useContext} from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import {Appstate} from '../App'



const Header = () => {
  const useAppstate = useContext(Appstate);

    return (
      
      <div className='sticky z-10 header top-0  flex justify-between items-center text-red-500  text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl
      font-bold p-3 border-b-2 border-gray-500'>
        <Link to = {'/'}><span className=''>Movie<span className='text-white'>Wood</span></span></Link>
        {useAppstate.login ? <div className='flex'>
         <Link to={'/addmovie'}> <h1 className='text-lg cursor-pointer flex items-center px-3'>
            <Button><AddIcon className='mr-1' color='secondary' /> <span className='text-white'>Add New</span></Button>
        </h1></Link>
        <Link to={'/logout'}> <h1 className='text-lg bg-red-500 cursor-pointer '>
       <Button><span className='text-white font-medium capitalize'>Logout</span></Button>
   </h1></Link> </div>
       :
       <Link to={'/login'}><h1 className='text-lg bg-green-500 cursor-pointer flex items-center'>
       <Button><span className='text-white font-medium capitalize'>Login</span></Button>
   </h1></Link>
}
      </div>
     
    )
}

export default Header   