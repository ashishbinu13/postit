import { CreatePost } from "../components/CreatePost";
import { Posts } from "../components/Posts";

export function Home() {
  return (
    <>
      <h1>Home</h1>

      <CreatePost />
      <hr />
      <Posts />
    </>
  );
}
