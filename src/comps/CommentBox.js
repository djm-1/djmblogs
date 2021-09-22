import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "./Comment";
import CommentSkeleton from "./CommentSkeleton";
import { useAuth0 } from "@auth0/auth0-react";
import ComModal from "./ComModal";

export default function CommentBox(props) {
  const [comments, setcomments] = useState([]);
  const [loading, setloading] = useState(true);
  const { isAuthenticated } = useAuth0();
  const [totalcomment, settotalcomment] = useState(0)

  const baseURL = `https://djmblogs.pythonanywhere.com/api/comment/?post=${props.postid}`;

  const loadComment = () => {
    axios.get(baseURL).then((response) => {
      var data = response.data;
      settotalcomment(data.length);
      var dataStore = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].parent_comment === null) {
          var obj = { parent: data[i], child: [] };
          for (var j = 0; j < data.length; j++) {
            if (data[j].parent_comment === data[i].id) {
              obj["child"].push(data[j]);
            }
          }
          dataStore.push(obj);
        }
      }
      setcomments(dataStore);
      setloading(false);
    });
  };

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      var data = response.data;
      settotalcomment(data.length)
      var dataStore = [];
      for (var i = 0; i < data.length; i++) {
        if (data[i].parent_comment === null) {
          var obj = { parent: data[i], child: [] };
          for (var j = 0; j < data.length; j++) {
            if (data[j].parent_comment === data[i].id) {
              obj["child"].push(data[j]);
            }
          }
          dataStore.push(obj);
        }
      }
      setcomments(dataStore);
      setTimeout(() => {
        setloading(false);
      }, 6000);
    });
  }, []);

  if (loading) {
    return (
      <div className="container-fluid mt-5">
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
      </div>
    );
  } else {
    //console.log(comments)
    return (
      <div>
        <p
          className="h3-responsive mt-5"
          style={{
            fontFamily: "Merriweather",
          }}
        >
          Comments and replies ({totalcomment})
        </p>
        {isAuthenticated ? (
          <div className="mb-4 mt-2">
            <button
              className={`btn btn-md btn-${props.theme.btnColor} ml-0`}
              data-toggle="modal"
              data-target="#basicExampleModal-null"
            >
              Post a Comment
            </button>

            <ComModal
              theme={props.theme}
              header={"Reply to this post"}
              //modal id is parentcomment id
              modalid={null}
              post_id={props.postid}
              Onreply={loadComment}
            />
          </div>
        ) : (
          ""
        )}
        <div className="container-fluid my-2">
          {comments.map((comment) => {
            return (
              <div className="container-fluid parent my-2">
                <Comment
                  theme={props.theme}
                  pic={comment.parent.user.pic}
                  date_time={comment.parent.date_time}
                  content={comment.parent.content}
                  user={comment.parent.user.name}
                  isparent={true}
                  id={comment.parent.id}
                  post_id={comment.parent.post}
                  Onreply={loadComment}
                />
                
                {comment.child.map((sub_comment) => {
                  return (
                    <div className="container-fluid child my-2">
                      <Comment
                        theme={props.theme}
                        pic={sub_comment.user.pic}
                        date_time={sub_comment.date_time}
                        content={sub_comment.content}
                        user={sub_comment.user.name}
                        isparent={false}
                      />
                    </div>
                  );
                })}
                
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
