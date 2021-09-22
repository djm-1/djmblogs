import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchBox from "./SearchBox";
import Seo from "./Seo";

export default function Posts(props) {
  
  const baseURL = "https://djmblogs.pythonanywhere.com/api/post/?p=";
  const altbaseURL="https://djmblogs.pythonanywhere.com/api/searchpost/?p="

  const [blogdata, setblogdata] = useState([]);
  const [totaldata, settotaldata] = useState(0);
  const [page, setpage] = useState(1);

  useEffect(() => {
    axios.get(`${baseURL}${page}`).then((response) => {
      setblogdata(response.data.results);
      settotaldata(response.data.count);
      setpage(page + 1);
    });
  }, []);

  const fetchMoreData = () => {
    setTimeout(() => {

      axios.get(`${baseURL}${page}`).then((response) => {
        setblogdata(blogdata.concat(response.data.results));
        settotaldata(response.data.count);
        setpage(page + 1);
      });
    }, 1200);
  };

  return (
    <div>
      <Seo
      title="Blog posts"
      quote="All blog posts of DjmBlogs"
      description="All blog posts of DjmBlogs"
    />
      <InfiniteScroll
        dataLength={blogdata.length}
        next={fetchMoreData}
        hasMore={blogdata.length !== totaldata}
        loader={
            <div className="my-2">
                <Spinner/>
            </div>
        }
      >
        <div className="container w-80" style={{
    
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:'5%',
            marginBottom:'5%'
        }}> 
        <div className="row">
          <div className="col-md-3">
            <p className="h2-responsive" style={{
              fontFamily:'Merriweather'
            }}>All blog posts</p>
          </div>
          <div className="col-md-4 ml-auto">
            <SearchBox theme={props.theme}/>
          </div>
      </div>
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
      </InfiniteScroll>
    </div>
  );
}
