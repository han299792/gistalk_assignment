import React from "react";

import { mockData, Post } from "./mockData";
import ShowData from "./showData.tsx";

function Home() {
  return (
    <div className="mockData">
      <ul>
        {mockData.map((post: Post) => (
          <li key={post.id}>
            <ShowData post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
