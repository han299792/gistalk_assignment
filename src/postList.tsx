import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { fetchPosts } from "./api";
import { Post } from "./mockData";
import ShowData from "./showData";
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
          <Link to={`/posts/${post.id}/comments`}>
            <ShowData post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
