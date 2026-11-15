
export interface User {
    id: number;
    name: string;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
}

const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export async function getUsers(): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/users`)

    if (!response.ok) {
        throw new Error("사용자 목록을 불러오지 못했습니다.")
    }

    return response.json();
}

export async function getPosts(userId: number): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts?userId=${userId}`)

    if (!response.ok) {
        throw new Error("글 목록을 불러오지 못했습니다.")
    }

    return response.json();
}