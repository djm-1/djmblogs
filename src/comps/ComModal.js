import React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "./Spinner"

export default function ComModal(props) {
  
  const {user}=useAuth0();
  const [loader, setloader] = useState(false);
  
  const PostComment=(event)=>{

    const baseURL='https://djmblogs.pythonanywhere.com/api/savecomment/'
    
    event.preventDefault();
    
    axios.post(baseURL,{
      content: document.getElementById(`comment_text--${props.modalid}`).value,
      user:'',
      post: props.post_id,
      parent_comment: props.modalid,
      user_email:user.email

    }).then((response)=>{
      //console.log(response.data)
      
      document.getElementById(`comment_text--${props.modalid}`).value=''
      document.getElementById(`closebtn-${props.modalid}`).click(); 
      setloader(true);
      setTimeout(() => {
        props.Onreply();  
        setloader(false);
      }, 1500);
         
    })
  }  
  
  if(loader){
    return(
      <Spinner/>
    )
  }
  else{
  return (
    <div
      className="modal fade"
      id={`basicExampleModal-${props.modalid}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className={`modal-content ${props.theme.navColor}-color`}>
          <div className="modal-header" style={{
            borderBottom:'0px'
          }}>
            <img src={user.picture} alt=""
            className="img-fluid rounded-circle z-depth-1 mb-1"
            height="50"
            width="50"/>
            <span className="modal-title pt-3 pl-3 h6" id="exampleModalLabel">
              {props.header}
            </span>
            <button
              id={`closebtn-${props.modalid}`}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{
                color:'inherit'
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form action="" onSubmit={PostComment}>
            <div className="modal-body">
              <textarea id={`comment_text--${props.modalid}`} required className="form-control" rows="6" placeholder="What's on your mind?"></textarea>
            </div>
            <div className="modal-footer" style={{
            borderTop:'0px'
          }}>
              <button type="submit" className={`btn btn-md btn-${props.theme.btnColor}`} 
              //data-dismiss="modal"
              >
                Post Comment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )};
}
