import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { DisplayInvoice } from "../components/DisplayInvoice";

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
    <div>
      <Head>
        <title>C&S Homestay Invoice Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isConnected ? (
          <DisplayInvoice />
        ) : (
          <div className="flex justify-center items-center h-[50rem]">
            <div className="text-md font-medium">{errorMessage}</div>
          </div>
        )}
      </main>
    </div>
  );
}
