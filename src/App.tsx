import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CommentList from "./commentList";
import Home from "./home";
import PostList from "./postList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id/comments" element={<CommentList />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
