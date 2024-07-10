import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { fetchComments } from "./api";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
const CommentList = () => {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 postId를 가져온다.
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
      {comments?.map((comment: Comment) => (
        <li key={comment.id}>
          <div>
            <h1>{comment.name}</h1>
            <p>{comment.body}</p>
            <p>By: {comment.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
