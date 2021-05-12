import { useState, useEffect } from "react";
import firebase from "src/Firebase";

type postState = {
  userId: string;
  name: string;
  content: {
    title: string;
    comment: String;
  };
  sendAt: string;
};

export const PostsView = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("posts")
      .onSnapshot((snapshot) => {
        const getPosts = snapshot.docs.map((doc) => doc.data());
        console.log("getPost", getPosts);
        setPosts(getPosts);
      });
  }, []);
  return (
    <div className="box">
      {posts
        .sort((a, b) => {
          if (a.sendAt < b.sendAt) {
            return 1;
          } else {
            return -1;
          }
        })
        .map((post) => {
          const content = post.content;
          console.log("tags", post.tags);
          return (
            <div className="box" key={post.id}>
              <h2>{content.title}</h2>
              <p>
                タグ：
                {post?.tags?.map((tag, index) => (
                  <span key={index} className="box">
                    {tag.label}
                  </span>
                ))}
              </p>
              <p>過ごした時間：{post.useTimes}</p>
              <p>
                {post.name}: {content.comment}
              </p>
              <p>{post.sendAt}</p>
            </div>
          );
        })}
    </div>
  );
};
