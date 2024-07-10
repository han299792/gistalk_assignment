import { Post } from "./mockData";
import { PostBody, PostTitle } from "./style";

interface ShowDataProps {
  post: Post;
}

const ShowData = ({ post }: ShowDataProps) => {
  return (
    <div>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
    </div>
  );
};

export default ShowData;
