import React from "react";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://djmblogs.pythonanywhere.com/api/popularpost/?p=1";

export default function RecentPosts(props) {
  const [blogdata, setblogdata] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setblogdata(response.data.results);
      //console.log(response.data)
    });
  }, []);

  return (
    <div>
      <h2
        className="my-4"
        style={{
          fontFamily: "Merriweather",
        }}
      >
        Popular posts
      </h2>
      <div className="row">
        {blogdata.map((el) => {
          return (
            <div className="col-md-4">
              <PostCard
                title={el.title}
                desc={el.sub_title}
                image={el.featured_image}
                theme={props.theme}
                tags={el.tags}
                id={el.id}
                date={el.date_time}
              ></PostCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
