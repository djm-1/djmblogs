import React from 'react'
import {Link} from 'react-router-dom'

export default function UpperCard(props) {
    return (
        <div>
           <div className={`jumbotron ${props.theme.navColor}-color`}>
      
        <h1 className="h1 mb-4" style={{
          //fontFamily:'Merriweather',
          fontWeight:'800',
        }}>Explore blog posts</h1>
        <p className="lead">DjmBlogs is a personal blog website for sharing my experience about web development, computer science, mathematics and life. I also love to write about sports, food, nature, tech etc topics. </p>
        <Link to="/posts" className="btn btn-danger btn-md btn-rounded ml-0">Browse all posts</Link>
      </div>
   
        </div>
    )
}
