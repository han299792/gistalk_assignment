import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const fetchComments = async (postId: number): Promise<Comment[]> => {
  const { data } = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  return data;
};

const CommentList = () => {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 postId를 가져옵니다.
  const postId = parseInt(id!, 10);

  const {
    data: comments,
    error,
    isLoading,
  } = useQuery<Comment[], Error>({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment.id}>
          <div>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <p>By: {comment.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
