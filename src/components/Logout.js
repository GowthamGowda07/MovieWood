import React from 'react'
import {Appstate} from '../App'
import swal from "sweetalert";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
    const useAppstate = useContext(Appstate);
    const navigate = useNavigate();
   
    navigate('/');
    useAppstate.setLogin(false);
       swal({
      title: "Logged Out",
      icon: "success",
      buttons: false,
      timer: 3000
    })
    
    
  }


 
export default Logout