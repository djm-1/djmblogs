import React from "react";
import { FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  EmailShareButton    

} from "react-share";
import { useLocation } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

export default function ShareBtn(props) {
  let location = useLocation();
  let currentUrl = "https://www.djmblogs.ml" + location.pathname;

const [copybtn, setcopybtn] = useState("fa-link");


useEffect(() => {
  document.getElementById('pageurl').value=currentUrl;  
}, [])

const copylink=()=>{
  setcopybtn("fa-check");
  document.getElementById('pageurl').select();
  document.execCommand('copy');
  setTimeout(() => {
    setcopybtn("fa-link");
  }, 1200);     
}

  return (
    <div className="text-center">
      <button
        className="btn btn-info btn-floating"
        data-toggle="modal"
        data-target="#ShareModal"
      >
        <i className="fa fa-share"></i>
      </button>
      <span className="ml-1">
        <strong>Share</strong>
      </span>
      <div
        class="modal fade"
        id="ShareModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class={`modal-content ${props.theme.navColor}-color`}>
            <div class="modal-header" style={{
                borderBottom:'0'
            }}>
              <p class="h5" id="exampleModalLabel">
                Share this post
              </p>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                style={{
                    color:'inherit'
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div className="row mx-auto">
                    <div className="col-md-2 col-6">
                      <FacebookShareButton
                      url={currentUrl}
                      quote={props.quote}
                      hashtag={props.hashtag}
                      className={"btn btn-floating btn-fb mx-auto"}
                      >

                        <i class="fab fa-facebook-f"></i>

                      </FacebookShareButton>
                    </div>
                    <div className="col-md-2 col-6">
                      <TwitterShareButton
                        url={currentUrl}
                        hashtags={props.hashtag}
                        className={"btn btn-floating btn-tw mx-auto"}
                      >
              
                            <i class="fab fa-twitter"></i>
              
                      </TwitterShareButton>
                    </div>
                    <div className="col-md-2 col-6">
                      <WhatsappShareButton
                        url={currentUrl}
                        title={props.title}
                        separator=" "
                        className={"btn btn-floating btn-success mx-auto"}
                      >

                            <i class="fab fa-whatsapp"></i>

                      </WhatsappShareButton>  
                    </div>
                    <div className="col-md-2 col-6">
                      <LinkedinShareButton
                        url={currentUrl}
                        className={"btn btn-floating btn-li mx-auto"}
                        title={props.title}
                        summary={props.description}
                        source="DjmBlogs"
                      >
                        
                            <i class="fab fa-linkedin-in"></i>
                        
                      </LinkedinShareButton>  
                    </div>
                    <div className="col-md-2 col-6">
                      <EmailShareButton
                        url={currentUrl}
                        className={"btn btn-floating btn-gplus mx-auto"}
                        subject={props.title}
                        body={props.description}
                      >
                        
                            <i class="fas fa-envelope"></i>
                        
                        </EmailShareButton>
                    </div>
                    <div className="col-md-2 col-6">
                        <button className="btn btn-floating btn-default mx-auto"
                        onClick={copylink}
                        >
                            <i class={`fa ${copybtn}`}></i>
                        </button>
                    </div>
                </div>
                <div className="px-2 mt-3">
                  <input type="url" id="pageurl" readOnly className="form-control bg-dark text-white"/>
                </div>
            </div>
            <div class="modal-footer" style={{
                borderTop:'0'
            }}>
              <button
                type="button"
                class={`btn btn-md btn-${props.theme.btnColor} mx-auto`}
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
