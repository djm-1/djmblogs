import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SweetAlert from "react-bootstrap-sweetalert";
import { useState,useEffect } from "react";
import ComModal from "./ComModal";


export default function Comment(props) {
  const { isAuthenticated } = useAuth0();
  const [alert, setalert] = useState(false)
  
  const CommentFunc=()=>{
      if(!isAuthenticated)
      {
        setalert(true);
      }  
  }

  
  
  return (
    <> 
    <SweetAlert 
        error 
        customClass="text-dark"
        btnSize="md"
        confirmBtnCssClass={`btn-${props.theme.btnColor}`}
        show={alert}
        title="Please Sign in to Post a comment"  
        onConfirm={() => setalert(false)}
        >
        Find the log in button on top <i className="fa fa-arrow-up"></i> 
    </SweetAlert>
        
          
    <div className="row">
      <div className="col-md-1">
        <img
          src={props.pic}
          className="img-fluid rounded-circle z-depth-1 mb-1"
          height="50"
          width="50"
          alt=""
        />
      </div>
      <div className="col-md-8">
        <p className="mt-0 mb-0 h6">{props.user}</p>
        <div>
          <small>
            <em>{props.date_time}</em>
          </small>
        </div>
        <p className="my-1">{props.content}</p>
        {props.isparent ? (
          <>
          <button
            className={`btn btn-outline-${
              props.theme.themeName === "light" ? "secondary" : "info"
            } ml-0 px-2 py-1 btn-sm btn-rounded`}
            onClick={CommentFunc}
            data-toggle="modal" 
            data-target={`#basicExampleModal-${props.id}`}
          >
            <i className="fa fa-reply"></i> Reply
          </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
    
    {isAuthenticated?
      <ComModal 
      
      theme={props.theme}
      header={`Reply to ${props.user}'s comment`}
      //modal id is parentcomment id
      modalid={props.id}  
      post_id={props.post_id}
      Onreply={props.Onreply}
          
      />
      :''}
    </>
  );
}
