import React from 'react'
import CoverImage from './CoverImage'
import HomeContent from './HomeContent'
import Seo from './Seo'

export default function Home(props) {
    //alert(props.theme.themeName)
    return (
        <div>
            <Seo
            title="Home"
            quote="Welcome to DjmBlogs"
            description="Welcome to DjmBlogs"
            />
            <CoverImage></CoverImage>
            <div className="container-fluid w-90">
                <HomeContent theme={props.theme}></HomeContent>                   
            </div>
            
                 
        </div>
    )
}
