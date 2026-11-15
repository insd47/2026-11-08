import { getUsers, type User } from "../api";
import { useEffect, useState } from "react";

export default function UserList({ userId, onSelect }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        setUsers(await getUsers());
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    }

    load();
  }, []);

  if (isLoading) {
    return <p>사용자를 불러오는 중...</p>;
  }

  if (isError) {
    return <p>사용자 목록을 불러오지 못했습니다.</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onSelect(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

interface Props {
  userId?: number;
  onSelect: (id?: number) => void;
}
