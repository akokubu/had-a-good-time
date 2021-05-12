import { LinkButton } from "src/components/LinkButton";
import { ImageCenter } from "src/components/ImageCenter";

function top() {
  return (
    <div>
      <p>あなたの大切な時間をシェアしましょう＊</p>
      <ImageCenter src="/eyecatch.jpg" width={600} height={400} />
      <div className="center">
        <LinkButton path="/posts" label="投稿ページへ" bgColor="tomato" />
      </div>
    </div>
  );
}

export default top;
