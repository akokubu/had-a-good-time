import { useState } from "react";
import firebase from "src/Firebase";
import dayjs from "dayjs";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const options = [
  { value: 5, label: "5分" },
  { value: 10, label: "10分" },
  { value: 15, label: "15分" },
  { value: 20, label: "20分" },
  { value: 25, label: "25分" },
  { value: 30, label: "30分" },
];

export const InputNewPost = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [times, setTimes] = useState<{ label: String; value: number }>();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<
    (string | { label: string; value: string })[]
  >([
    { label: "Enjoy", value: "enjoy" },
    { label: "一人で", value: "only" },
  ]);

  const submit = () => {
    if (title !== "" && comment !== "") {
      firebase
        .firestore()
        .collection("posts")
        .add({
          userId: "123456",
          name: "user_name",
          content: {
            title,
            comment,
          },
          useTimes: times.value,
          sendAt: dayjs(new Date()).format("YYYY/MM/DD HH:mm:ss"),
          category: "string",
          tags: tags,
        });
      setTitle("");
      setComment("");
    } else {
      alert("タイトルとコメントを入力してください.");
    }
  };

  /**
   * 入力された値をデータ用に整形
   */
  const createOption = (label: string): { label: string; value: string } => ({
    label,
    value: label,
  });

  const onKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    console.log("onKeyDown", tag, event.key);
    if (tag === null) {
      return;
    }

    console.log("event.key", event.key);
    switch (event.key) {
      case "Enter":
      case "Tab":
        if (tag) {
          setTag("");
          setTags([...tags, createOption(tag)]);
          event.preventDefault();
        }
    }
  };

  return (
    <div className="box">
      <div>タイトル</div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div>コメント</div>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <div>滞在した時間</div>
      <Select options={options} value={times} onChange={setTimes} />
      <button onClick={submit}>送信</button>
      <div>タグ</div>
      <CreatableSelect
        inputValue={tag}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={setTags}
        onInputChange={setTag}
        onKeyDown={onKeyDown}
        value={tags}
        placeholder="タグを選択してください"
      />
    </div>
  );
};
