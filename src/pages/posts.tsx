import { InputNewPost } from "src/components/InputNewPost/InputNewPost";
import { PostsView } from "src/components/PostsView/PostsView";

function posts() {
  return (
    <div>
      <h1>Posts</h1>
      <InputNewPost />
      <PostsView />
    </div>
  );
}

export default posts;
