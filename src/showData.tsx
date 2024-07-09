import React from "react";
import styled from "styled-components";

import { Post } from "./mockData";

interface ShowDataProps {
  post: Post;
}

const PostTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const PostBody = styled.p`
  font-size: 1em;
`;

const ShowData = ({ post }: ShowDataProps) => {
  return (
    <div>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
    </div>
  );
};

export default ShowData;
