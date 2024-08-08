import Footer from "@/views/components/Footer";
import Header from "@/views/components/Header";
import ScrollTop from "@/views/components/ScrollTop";
import ScrollToTop from "@/views/components/ScrollToTop";
import "./global.css";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Laboratory of Intelligent Software Engineering and Data-driven Operation Research</title>
      </Head>
      <ScrollToTop />
      <Header />
      <Component {...pageProps} />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default MyApp;