import axios from "axios";

import { Photo } from "./album";
import { Comment } from "./commentList";
import { Post } from "./mockData";

export const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return data;
};
export const fetchComments = async (postId: number): Promise<Comment[]> => {
  const { data } = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  return data;
};
export const fetchPhotos = async (): Promise<Photo[]> => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
  );
  return data;
};
