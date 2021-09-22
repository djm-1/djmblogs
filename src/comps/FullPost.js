import React from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import Error404 from "./Error404";
import PostBody from "./PostBody";

export default function FullPost(props) {
  const [blogdata, setblogdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [check, setcheck] = useState(true);
  var { id } = useParams();
  //console.log(id);

  useEffect(() => {
    if (Number.isInteger(Number(id))) {
      const baseURL = `https://djmblogs.pythonanywhere.com/api/post/?id=${id}`;
      axios.get(baseURL).then((response) => {
        if (response.data.count === 0) {
          setcheck(false);
        } else {
          setblogdata(response.data.results);
          setloading(true)
        }
      });
    } else {
      setcheck(false);
    }
  }, []);

  if (check & loading) {
    return <div>
        <PostBody theme={props.theme}
        title={blogdata[0].title}
        sub_title={blogdata[0].sub_title}
        date_time={blogdata[0].date_time}
        featured_image={blogdata[0].featured_image}
        content={blogdata[0].content}
        tags={blogdata[0].tags}
        id={blogdata[0].id}
        />
    </div>;
  } else {
    return (
      <div>
        <Error404 theme={props.theme}/>
      </div>
    );
  }
}
