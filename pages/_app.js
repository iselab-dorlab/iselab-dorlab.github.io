import Footer from "@/views/components/Footer";
import Header from "@/views/components/Header";
import "./global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
