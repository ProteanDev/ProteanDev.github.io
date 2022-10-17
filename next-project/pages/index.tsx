import type { NextPage } from "next";
import Head from "next/head";

const remoteCVImageSource =
  "https://lh3.googleusercontent.com/drive-viewer/AJc5JmT4UL55YXUeMTw4Xh8FBlVHBmT92gUu7AAStDhdTMEZRVcBwVx6ib9Gibb94DpbT1qZBsqCX8c=w1920-h895";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Christian Dela Peña</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <>
          <picture className="w-full">
            <source srcSet={remoteCVImageSource} type="image/png" />
            <img
              src={remoteCVImageSource}
              alt="CV"
              className="w-full h-full object-contain"
            />
          </picture>
        </>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Christian Dela Peña ( All Rights Received 2022 )
      </footer>
    </div>
  );
};

export default Home;
