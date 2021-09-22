import React from "react";
import { useState,useEffect } from "react";
import Skeleton from 'react-loading-skeleton'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function PostCard(props) {
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 3000);  
    
  }, [])
  
  if(loading){
    return(
        <div className="usercard mb-3">
          <div className="cards">
            <Skeleton height={200}/>  
            <Skeleton height={20} count={4}/>
          </div>
        </div>
    )
  }
  else{
  return (
    
    <>
      <div class={`card ${props.theme.navColor}-color mb-3`}>
        <div class="view overlay">
          <img
            class="card-img-top"
            src={props.image?props.image:"https://res.cloudinary.com/dabykheek/image/upload/v1631556992/Djmblogs/blog_kfgits.jpg"}
            alt="Card image cap"
          />
          <a>
            <div class="mask waves-effect waves-light "></div>
          </a>
        </div>

        <div class="card-body">
          <h3 class="card-title mb-1" style={{
            fontFamily:'Roboto',
            fontWeight:'900',
          }}>{props.title}</h3>
          
          <p className="card-text mb-1">
            <em>{props.date}</em>
          </p>
          <div className="mb-2">
            {props.tags.map((el,index)=>{
              return(
                <span class={`badge badge-${props.theme.btnColor} badge-pill pb-1 mr-2 mb-2`}>{el}</span>
              )
            })}
          
          </div>
          <p>
            {props.desc}
          </p>
                      

          <Link to={`/post/${props.id}`}  class={`btn btn-${props.theme.btnColor} btn-md ml-0`}>
            Read More <i className="fas fa-arrow-right"></i>
          </Link>
          
          
          
        </div>
      </div>
    </>

  );
        }
}
