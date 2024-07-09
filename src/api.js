// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BASE_URL = "https://jsonplaceholder.typicode.com";
//백엔드로부터 모든 포스트 목록을 받아오는 함수 구현
export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  return await response.json;
}
