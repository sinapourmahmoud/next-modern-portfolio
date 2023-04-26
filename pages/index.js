import Footer from "@/components/Footer";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "@/sections";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Metaversus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full bg-primary-black overflow-hidden">
        <Hero />
        <div className="relative">
          <div className="w-full gradient-02" />
          <About />
          <Explore />
        </div>
        <div className="relative">
          <div className="gradient-03" />
          <GetStarted />
          <WhatsNew />
        </div>
        <World />
        <Insights />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
