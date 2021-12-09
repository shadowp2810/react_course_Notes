import React from "react";

const Posts = ({ match }) => {
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.param.year}, Month: {match.param.month}
    </div>
  );
};

export default Posts;
