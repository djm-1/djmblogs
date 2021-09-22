import React from "react";
import Seo from "./Seo";

export default function Contact(props) {
  return (
    <>
      <Seo
        title="Contact me"
        quote="Send me a message by filling this form"
        description="Send me a message by filling this form"
      />
      <div
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg')",
          backgroundSize: "cover",
          padding: "2px",
        }}
      >
        <div
          className="card"
          style={{
            width: "75%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "8%",
            marginBottom: "8%",
          }}
        >
          <h4
            className={`card-header ${props.theme.btnColor}-color white-text text-center py-4`}
            style={{
              fontFamily: "Merriweather",
            }}
          >
            <strong>Contact me</strong>
          </h4>

          <div className="card-body px-lg-5 pt-2">
            <form
              className="text-center"
              action="https://formspree.io/f/xoqyrqkr"
              method="POST"
            >
              <div className="md-form mt-3">
                <input
                  type="text"
                  id="materialContactFormName"
                  className="form-control"
                  required
                  name="name"
                />
                <label htmlFor="materialContactFormName">Name</label>
              </div>

              <div className="md-form">
                <input
                  type="email"
                  id="materialContactFormEmail"
                  className="form-control"
                  required
                  name="email"
                />
                <label htmlFor="materialContactFormEmail">E-mail</label>
              </div>

              <div className="md-form">
                <textarea
                  id="materialContactFormMessage"
                  className="form-control md-textarea"
                  rows="3"
                  required
                  name="message"
                ></textarea>
                <label htmlFor="materialContactFormMessage">Message</label>
              </div>

              <button
                className={`btn btn-outline-${props.theme.btnColor} btn-rounded z-depth-0 my-4 waves-effect`}
                type="submit"
              >
                Send <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
