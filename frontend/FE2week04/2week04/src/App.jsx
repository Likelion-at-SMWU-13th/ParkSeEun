import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await response.json();
  }
  const { data: postsData, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) return "로딩 중입니다....";

  const posts = postsData ?? [];

  return (
    <div>
      💗tanctack query 실습💗
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
