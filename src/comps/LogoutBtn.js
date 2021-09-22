import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';
import axios from "axios";

export default function LogoutBtn(props) {
    const {logout}=useAuth0();
    const { user } = useAuth0();
  const baseURL = "https://djmblogs.pythonanywhere.com/api/customuser/";

  function SendUserToBackend(){
    axios.post(baseURL, {
        name: user.nickname,
        email: user.email,
        pic:user.picture
      }).then((response)=>{
        console.log(response.data)
      })
  };
    useEffect(() => {
      SendUserToBackend();
    }, [])
    return (
        <>
        <button
          className={`btn btn-danger btn-sm`}
          onClick={()=>logout()}
        >Log out</button>
      </>
    )
}
