import React from "react";
import axios from "axios"
import SweetAlert from 'react-bootstrap-sweetalert';
import { useState } from "react";

const baseURL='https://djmblogs.pythonanywhere.com/api/subscriber/'

export default function NewsLetter(props) {
  const [alert, setalert] = useState({
    show:false
  })
  
  const subscribe=(event)=>{
    event.preventDefault();
    axios.post(baseURL,{
       email: document.getElementById('sub_email').value
    })
    .then((response)=>{
      //console.log(response.data)
      document.getElementById('sub_email').value=''
      setalert({
        show:true
      })
    })
  }
  return (
    <>
        <SweetAlert 
          success 
          customClass="text-dark"
          btnSize="md"
          confirmBtnCssClass={`btn-${props.theme.btnColor}`}
          show={alert.show}
          title="Thank you !"  
          onConfirm={() => setalert({ show: false })}
          >
          You are now subscribed to DjmBlogs
        </SweetAlert>

        
      <div className="jumbotron  text-white text-center mt-5" style={{
        marginLeft:'auto',
        marginRight:'auto',
        background:'linear-gradient(to right, #fc6767, #ec008c)'
      }}>
      
        <h2 style={{
          fontFamily:'Merriweather'
        }}>Subscribe to my newsletter !</h2>
        <p className="lead">So that you never miss any update</p>
      
  
      <form onSubmit={subscribe} action="">
        <div className="input-group mb-3" style={{
          width:'90%',
          marginLeft:'auto',
          marginRight:'auto'
        }}>
          <input type="email" className="form-control" placeholder="Your email address here"
            aria-describedby="button-addon2" id="sub_email" required/>
          <div className="input-group-append">
            <button className="btn btn-md btn-outline-white m-0 mx-2 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Subscribe <i className="fas fa-bell"></i></button>
          </div>
        </div>
      </form>
      
      </div>
    </>
  );
}
