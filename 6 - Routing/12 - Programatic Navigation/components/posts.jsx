import React from "react";
import queryString from "query-string";

const Posts = ({ match, location }) => {
  const { result } = queryString.parse(location.search);
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.param.year}, Month: {match.param.month}
    </div>
  );
};

export default Posts;
