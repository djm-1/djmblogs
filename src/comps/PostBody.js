import React from "react";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import hljs from "highlight.js";
//import "highlight.js/styles/monokai.css";
//import "highlight.js/styles/base16/material-darker.css";
import CommentBox from "./CommentBox";
import LikeBtn from "./LikeBtn";
import ShareBtn from "./ShareBtn";
import Seo from "./Seo";


export default function PostBody(props) {
  
  
  const CodethemeDark="https://cdn.jsdelivr.net/npm/highlight.js@11.2.0/styles/an-old-hope.css";
  const CodethemeLight="https://cdn.jsdelivr.net/npm/highlight.js@11.2.0/styles/monokai.css";

  function setContent() {
    document.getElementById("content").innerHTML = DOMPurify.sanitize(
      props.content
    );
  }

  function createMarkup() {
    return { __html: props.content };
  }

  function SyntaxHighlight() {
    document.querySelectorAll("pre code").forEach((block,index) => {
      block.id=`code-${index}`;
      block.style.fontSize='1rem';
      hljs.highlightBlock(block);
      var copydiv=document.createElement("div");
      copydiv.classList.add("text-right");

      var copybtn=document.createElement("button");
      copybtn.classList.add("btn","btn-primary","btn-sm","px-3");
      copybtn.id=`copy-btn-${index}`;
      var defaultinner=`<i class="fa fa-clipboard" aria-hidden="true"></i>`;
      copybtn.innerHTML=defaultinner;
      
      block.appendChild(copydiv);
      copydiv.appendChild(copybtn);

      copybtn.onclick=()=>{
        window.getSelection().selectAllChildren(
          block
        ); 
        document.execCommand('copy');
        copybtn.innerHTML='copied!';
        setTimeout(() => {
          copybtn.innerHTML=defaultinner;
        }, 1000);  
      }
    });
  }

  function addImgClass() {
    document.querySelectorAll("img").forEach((image) => {
      image.classList.add("img-fluid");
    });
  }
  useEffect(() => {
    createMarkup();
    //setContent();
    SyntaxHighlight();
    addImgClass();
    
  }, []);
  return (
    <>
    <Seo
      title={props.title}
      quote={props.sub_title}
      image={props.featured_image}
      description={props.sub_title}
      hashtag={props.tags}
    />
    <div>
      <link rel="stylesheet" type="text/css" href={props.theme.navColor==='light'?CodethemeLight:CodethemeDark}/>
      
      <div
        className="container w-80 ml-auto mr-auto"
        style={{
          //width: "80%",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <div className="text-center">  
        <p
          className="h1-responsive mb-1"
          style={{
            fontFamily: "Merriweather",
          }}
        >
          {props.title}
        </p>
        <p className="mb-1">
          <em>{props.sub_title}</em>
        </p>
        <p className="mb-1">
          <small>
            <strong>
              <i className="far fa-clock"></i> Last updated: {props.date_time}
            </strong>
          </small>
        </p>
        {props.tags.map((el, index) => {
          return (
            <span
              class={`badge badge-${props.theme.btnColor} badge-pill pb-1 mr-2 mb-2`}
            >
              {el}
            </span>
          );
        })}
        <div className="mt-5">
          <img src={props.featured_image?props.featured_image:'https://res.cloudinary.com/dabykheek/image/upload/v1631556992/Djmblogs/blog_kfgits.jpg'} alt="img" />
        </div>
        </div>
        <div
          id="content"
          className="mt-5"
          dangerouslySetInnerHTML={createMarkup()}
          style={{
            fontFamily: "Roboto",
            fontWeight:'400',
            fontSize:'1.08rem'
          }}
        ></div>
        <div className="row w-75 mx-auto">
          <div className="col-sm-6">
            <LikeBtn postid={props.id} theme={props.theme}/>
          </div>
          <div className="col-sm-6">
            <ShareBtn 
              postid={props.id} 
              theme={props.theme}
              title={props.title}
              quote={props.sub_title}
              image={props.featured_image}
              description={props.sub_title}
              hashtag={props.tags}
            />
          </div>
        </div>

        <CommentBox theme={props.theme} postid={props.id}/>   
      </div> 
    </div>
    </>
  );
}
