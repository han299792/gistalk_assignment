import "./App.css";

import { useState } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import styled, { CSSProperties } from "styled-components";
import { mockData, Post } from "./mockData.ts";
import ReactLogo from "./assets/react.svg?react";

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

function ShowData({ post }: ShowDataProps) {
  return (
    <div>
      {post.title} : {post.body}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
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
    </div>
  );
}

export default App;
