import React from "react";
import "./Comment.scss";
export default function Comment(props) {
  return (
    <div className="comment">
      <span>{props.comment.value}</span>
    </div>
  );
}
