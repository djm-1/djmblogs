import React, { useState } from "react";

export default function CoverImage() {
  return (
    <>
      <div
        id="carousel-example-2"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            className="active ind"
          ></li>
          <li
            data-target="#carousel-example-2"
            data-slide-to="1"
            className="ind"
          ></li>
          <li
            data-target="#carousel-example-2"
            data-slide-to="2"
            className="ind"
          ></li>
          <li
            data-target="#carousel-example-2"
            data-slide-to="3"
            className="ind"
          ></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="view">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(72).jpg"
                alt="First slide"
              />
              {/* <div className="mask rgba-black-slight"></div> */}
            </div>
            <div className="carousel-caption">
              <div className="text-box">
                <h1 className="h1-responsive">Welcome to DjmBlogs</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dabykheek/image/upload/v1631531331/Djmblogs/james-harrison-vpOeXr5wmR4-unsplash_1_coufdh.jpg"
                alt="Second slide"
              />
              {/* <div className="mask rgba-black-slight"></div> */}
            </div>
            <div className="carousel-caption">
              <div className="text-box">
                <h1 className="h1-responsive">Welcome to DjmBlogs</h1>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dabykheek/image/upload/v1631525991/Djmblogs/pietro-de-grandi-T7K4aEPoGGk-unsplash_1_v6hxzq.jpg"
                alt="Third slide"
              />
              {/* <div className="mask rgba-black-slight"></div> */}
            </div>
            <div className="carousel-caption">
              <div className="text-box">
                <h1 className="h1-responsive">Welcome to DjmBlogs</h1>
              </div>
            </div>
          </div>
          
          <div className="carousel-item">
            <div className="view">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dabykheek/image/upload/v1631530711/Djmblogs/frank-mckenna-4V8JxijgZ_c-unsplash_1_caeiir.jpg"
                alt="Fourth slide"
              />
              {/* <div className="mask rgba-black-slight"></div> */}
            </div>
            <div className="carousel-caption">
              <div className="text-box">
                <h1 className="h1-responsive">Welcome to DjmBlogs</h1>
              </div>
            </div>
          </div>
        
        </div>

        <a
          className="carousel-control-prev"
          href="#carousel-example-2"
          role="button"
          data-slide="prev"
        >
          <i
            className="carousel-control-prev-icon fa fa-chevron-left fa-lg"
            aria-hidden="true"
          ></i>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-example-2"
          role="button"
          data-slide="next"
        >
          <i
            className="carousel-control-next-icon fa fa-chevron-right fa-lg"
            aria-hidden="true"
          ></i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}
