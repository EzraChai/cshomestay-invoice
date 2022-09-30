import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import "./../styles/global.css";

export async function getServerSideProps(context: any) {
  try {
    await clientPromise;
    return {
      props: { isConnected: true },
    };
  } catch (e: any) {
    return {
      props: { isConnected: false, errorMessage: e.toString() },
    };
  }
}

export default function Home({
  isConnected,
  errorMessage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isConnected ? (
          <></>
        ) : (
          <div>
            <div className="">{errorMessage}</div>
          </div>
        )}
      </main>
    </div>
  );
}
