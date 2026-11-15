import { useState } from "react";
import UserList from "./components/user-list";
import PostList from "./components/post-list";

function App() {
  const [user, setUser] = useState<number>();

  return (
    <main>
      <h1>사용자</h1>
      <UserList userId={user} onSelect={setUser} />
      {user ? <PostList userId={user} /> : <p>사용자를 골라 주세요.</p>}
    </main>
  )
}

export default App
