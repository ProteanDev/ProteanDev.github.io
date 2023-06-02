import type { NextPage } from "next";
import Head from "next/head";

const remoteCVImageSource =
  "https://raw.githubusercontent.com/ProteanDev/ProteanDev.github.io/master/cv-img.webp";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <Head>
        <title>Chan D</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center text-center">
        <>
          <picture className="w-full">
            <source srcSet={remoteCVImageSource} type="image/webp" />
            <img
              src={remoteCVImageSource}
              alt="CV"
              className="w-full h-full object-contain"
            />
          </picture>
        </>
      </main>
    </div>
  );
};

export default Home;
