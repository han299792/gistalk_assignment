export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const mockData: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "test title one",
    body: "test body one",
  },
  {
    userId: 2,
    id: 2,
    title: "test title two",
    body: "test body two",
  },
];
