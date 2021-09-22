import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState,useEffect } from "react";
import axios from "axios";

export default function UserActivity(props) {
    
    const commURL='https://djmblogs.pythonanywhere.com/api/usercomment/?email='
    const likeURL='https://djmblogs.pythonanywhere.com/api/like/?user='
    const subsURL='https://djmblogs.pythonanywhere.com/api/subscriber/?email='
    const unsubsURL='https://djmblogs.pythonanywhere.com/api/subscriber/'

    const {isAuthenticated}=useAuth0();
    const {user}=useAuth0();

    const [comment, setcomment] = useState(0)
    const [likes, setlikes] = useState(0)
    const [subscribed, setsubscribed] = useState(false)
    const [subsid, setsubsid] = useState(-1)

    //no of likes 

    const getlike=()=>{
        axios.get(likeURL+user.email).then((response)=>{
            setlikes(response.data.length);
        })
    }

    //no of comments

    const getcomment=()=>{
        axios.get(commURL+user.email).then((response)=>{
            setcomment(response.data);
        })
    }

    //is subscribed

    const getsubs=()=>{
        axios.get(subsURL+user.email).then((response)=>{
            setsubscribed(response.data.is_sub);
            if(subscribed){
                setsubsid(response.data.sub_id);
            }
        })
    }

    //unsubscribe
    const unsubscribe=()=>{
        if(subscribed){
            axios.delete(unsubsURL+`${subsid}/`).then(()=>{
                setsubscribed(false);
            })
        }
    }


    useEffect(() => {
        getlike();
        getcomment();
        getsubs();
    }, [subscribed])
    return (
    <div>
      <h3
        className="text-center mt-5 mb-3"
        style={{
          fontFamily: "Merriweather",
        }}
      >
        Your activity
      </h3>
      <div className="row mx-auto" style={{ width: "95%" }}>
        <div className="col-md-4">
          <div
            className={`card my-2 ${props.theme.navColor}-color text-${
              props.theme.navColor === "light" ? "danger" : "info"
            }`}
          >
            <div className="card-body text-center">
              <i className="far fa-heart fa-4x"></i>
              <p className="h5 mt-2">{likes} Liked posts</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card my-2 ${props.theme.navColor}-color text-${
              props.theme.navColor === "light" ? "default" : "info"
            }`}>
            <div className="card-body text-center">
              <i className="far fa-comments fa-4x"></i>
              <p className="h5 mt-2">{comment} Comments made</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className={`card my-2 ${props.theme.navColor}-color text-${
              props.theme.navColor === "light" ? "secondary" : "info"
            }`}>
            <div className="card-body text-center">
              <i className="far fa-newspaper fa-4x"></i>
              
            {subscribed?
                <>
                <p className="h5 mt-2">Subscribed to my newsletter</p>
                <button className={`btn btn-sm mx-auto btn-outline-${
                props.theme.navColor === "light" ? "secondary" : "info"
                }`}
                onClick={unsubscribe}>
                    Unsubscribe
                </button>
                </>
            :
                <>
                <p className="h5 mt-2">You are not subscribed to my newsletter</p>
                </>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
