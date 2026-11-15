import { getPosts, type Post } from "../api";
import { useEffect, useState } from "react";

export default function PostList({ userId }: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setPosts(await getPosts(userId));
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    }

    load();
  }, [userId]);

  if (isLoading) {
    return <p>글을 불러오는 중...</p>;
  }

  if (isError) {
    return <p>글 목록을 불러오지 못했습니다.</p>;
  }

  return (
    <section>
      <h2>{userId}번 사용자의 글</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            [작성자 {post.userId}] {post.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface Props {
  userId: number;
}
