import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cvImage from "../public/cv-img.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Christian Dela Peña</title>
        <meta name="description" content="CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src={cvImage} alt="Picture of the author" />
      </main>

      <footer className={styles.footer}>
        Christian Dela Peña ( All Rights Received 2022 )
      </footer>
    </div>
  );
}
