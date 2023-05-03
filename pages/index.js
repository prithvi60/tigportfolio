import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import { ScrollingProvider } from "react-scroll-section";

export default function Home() {
  return (
    <div className="text-black font-eczar">
      <NextSeo
        title="Home: nine4"
        description="Welcome to The Internet Generation!"
        canonical="https://nine4-3.vercel.app/"
        openGraph={{
          url: "https://nine4-3.vercel.app/",
        }}
      />
      <Head>
        <title>TIG</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <ScrollingProvider>
        <Header />
        <Main />
        <Footer />
      </ScrollingProvider>
    </div>
  );
}
