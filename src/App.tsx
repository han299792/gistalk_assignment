import "./App.css";
import "tailwindcss/tailwind.css";
//import { useState } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import styled, { CSSProperties } from "styled-components";
import { mockData, Post } from "./mockData.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReadTheDocs = styled.p<{
  $color?: CSSProperties["color"];
}>`
  color: ${({ $color }) => $color ?? "red"};
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

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

const queryClient = new QueryClient();

function ShowData({ post }: ShowDataProps) {
  return (
    <div>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
    </div>
  );
}

function App() {
  const { t } = useTranslation("main");
  return (
    <div className="App">
      <div className="mockData">
        <ul>
          {mockData.map((post: Post) => (
            <li key={post.id}>
              <ShowData post={post} />
            </li>
          ))}
        </ul>
      </div>
      <div className="quary">
        <QueryClientProvider client={queryClient}></QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
