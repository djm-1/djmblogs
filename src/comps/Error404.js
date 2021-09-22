import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


export default function Error404(props) {
    const dark404="https://res.cloudinary.com/dabykheek/image/upload/v1632138379/Djmblogs/img404_o2hujk.svg";
    const light404="https://res.cloudinary.com/dabykheek/image/upload/v1632138379/Djmblogs/img404_alt_what9p.svg";

    const [quote, setquote] = useState({
        content:'',
        author:''
    })

    useEffect(() => {
        
        axios.get('https://api.quotable.io/random')
        .then((response)=>{
            setquote({
                content:response.data.content,
                author:response.data.author
            })
        })
    }, [])
    return (
        <div className="my-5 mx-2 text-center">
            
            <div className="col-12 col-md-6 my-2 mx-auto">
                <img src={props.theme.navColor==='light'?light404:dark404} alt="" className="w-100"/>
            </div>
            <div className="pt-2">
                <p className="h3-responsive" style={{
                    fontFamily:'Merriweather'
                }}>Seems like you are lost !</p>
                <p><em>"{quote.content}"</em> ~{quote.author}</p>
            </div>
            <Link to="/" className={`btn btn-outline-${props.theme.btnColor} btn-md btn-rounded`}>Go back to home</Link>    
        </div>
    )
}
