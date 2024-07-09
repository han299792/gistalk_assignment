import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import { Post } from "./mockData";
import ShowData from "./showData";

const fetchPosts = async () => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return data;
};
//비동기함수는 화살표형으로만 쓸 수 있나?
const PostList = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //캐시 키, 데이터 받아오는 함수 순서
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {posts?.map((post: Post) => (
        <li key={post.id}>
          <ShowData post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostList;
