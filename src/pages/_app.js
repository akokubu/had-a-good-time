import "../../styles/globals.css";
import "../../styles/reset.css";
import { LinkButton } from "src/components/LinkButton";
import { useRouter } from "next/router";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {router.pathname !== "/" && <LinkButton path="/" label="トップへ戻る" />}
      <Footer />
    </>
  );
}

export default MyApp;
