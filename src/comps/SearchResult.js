import React from 'react'
import { useParams } from 'react-router'
import { useState,useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import SearchBox from './SearchBox';
import Error404 from './Error404';
import Seo from './Seo';


export default function SearchResult(props) {
    var {slug}=useParams();

    const searchURL='https://djmblogs.pythonanywhere.com/api/searchpost/?search='

    //const [slugdata, setslugdata] = useState('');
    const [blogdata, setblogdata] = useState([]);
    
    useEffect(() => {
        axios.get(searchURL+`${slug}`).then((response)=>{
            setblogdata(response.data);
        })
    }, [slug])
    return (
        <div>
          <Seo
          title="Search Results"
          description="Search results containing your query..."
          />

          <div className="container w-80" style={{  
              marginLeft:'auto',
              marginRight:'auto',
              marginTop:'5%',
              marginBottom:'5%'
          }}> 
          <div className="row">
            <div className="col-md-8">
              <p className="h2-responsive" style={{
                fontFamily:'Merriweather'
              }}>Blog posts containing "{slug}"</p>
            </div>
            <div className="col-md-4 ml-auto">
              <SearchBox theme={props.theme}/>
            </div>
        </div>
          {blogdata.length===0?
          <div>
            <Error404 theme={props.theme}/>
          </div>
          :''}    
          <div className="row">
            {blogdata.map((el) => {
              return (
                <div className="col-md-4">
                  <PostCard
                    title={el.title}
                    desc={el.sub_title}
                    image={el.featured_image}
                    theme={props.theme}
                    date={el.date_time}
                    tags={el.tags}
                    id={el.id}
                  ></PostCard>
                </div>
              );
            })}
          </div>
          </div>
    
      </div>
    
    )
}
