import React from "react";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";

export default function LikeBtn(props) {
  const [like, setlike] = useState(false);
  const [totallikes, settotallikes] = useState(0);
  const [likeid, setlikeid] = useState(-1);
  const [alert, setalert] = useState(false);
  //const [loading, setloading] = useState(true)

  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const baseURL = "https://djmblogs.pythonanywhere.com/api/like/";

  // checks total no of likes on post

  const checklikes = () => {
    axios.get(baseURL + `?post=${props.postid}`).then((response) => {
      settotallikes(response.data.length);
    });
  };

  // checks if user has already liked the post

  const userlikedpost = () => {
    if (isAuthenticated) {
      axios
        .get(baseURL + `?post=${props.postid}&user=${user.email}`)
        .then((response) => {
          var data = response.data;
          if (data.val === true) {
            setlike(true);
            setlikeid(data.id);
          } else {
            setlike(false);
          }
        });
    }
  };

  // user likes post (button function)

  const likepost = () => {
    if (!like) {
      axios
        .post(baseURL, {
          user_email: user.email,
          post: props.postid,
        })
        .then((response) => {
          //console.log(response)
          setlikeid(response.data.id);
          setlike(true);
          checklikes();
        });
    }
  };

  // toggle like

  const dislikepost = () => {
    if (like) {
      axios.delete(baseURL + `${likeid}`).then(() => {
        setlike(false);
        checklikes();
      });
    }
  };

  useEffect(() => {
    checklikes();
    userlikedpost();
  }, [isAuthenticated]);

  return (
    <div className="text-center">
      {isAuthenticated ? (
        <>
          {like ? (
            <button
              className="btn btn-floating btn-danger"
              onClick={dislikepost}
            >
              <i className="fas fa-heart"></i>
            </button>
          ) : (
            <button className="btn btn-floating btn-danger" onClick={likepost}>
              <i className="far fa-heart"></i>
            </button>
          )}
        </>
      ) : (
        <>
          <SweetAlert
            error
            customClass="text-dark"
            btnSize="md"
            confirmBtnCssClass={`btn-${props.theme.btnColor}`}
            show={alert}
            title="Please Sign in to like the post"
            onConfirm={() => setalert(false)}
          >
            Find the log in button on top <i className="fa fa-arrow-up"></i>
          </SweetAlert>
          <button
            className="btn btn-floating btn-danger"
            onClick={() => {
              setalert(true);
            }}
          >
            <i className="far fa-heart"></i>
          </button>
        </>
      )}
      <span className="ml-1">
        <strong>{totallikes} Likes</strong>
      </span>
    </div>
  );
}
