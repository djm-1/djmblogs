import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function LoginBtn(props) {
    const {loginWithRedirect}=useAuth0();
    return (
        <>
        <button
          className={`btn btn-${props.theme.btnColor} btn-sm`}
          onClick={()=>loginWithRedirect()}
        >Log in</button>
      </>
    )
}
