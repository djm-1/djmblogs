import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Error404 from './Error404';
import UserActivity from './UserActivity';
import Seo from './Seo';

export default function Profile(props) {
    const { isAuthenticated } = useAuth0();
    const{user}=useAuth0();
    return (
        <>
        <Seo
        title="Your profile"
        description="This is your profile"
        />
        <div className="my-5 mx-auto" style={{
            width:'85%'
        }}>
          {
          isAuthenticated?
            <div>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 px-0 text-center mt-2">
                        <img src={user.picture} alt="" className="img-fluid z-depth-2 rounded-circle"/>
                    </div>
                    <div className="col-md-4 px-0 mt-2">
                        <p className="h3" style={{fontFamily:'Merriweather'}}>{user.nickname}</p>
                        <p>{user.email}</p>   
                    </div>
                </div>
                
                </div>
                <UserActivity theme={props.theme}/>
            
            </div>
          :
            <div className="text-center">
               <h4 className="h4">You need to signup first to access this page !</h4>
                <div>
                    <Error404 theme={props.theme}/>
                </div>
            </div>
          }  
        </div>
        </>
    )
}
