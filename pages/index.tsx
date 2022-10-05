import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { useSession, signIn } from "next-auth/react";

import { DisplayInvoice } from "../components/DisplayInvoice";
import { InsertDataInvoice } from "../components/InsertDataInvoice";

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
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <title>C&S Homestay Invoice Generator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          {isConnected ? (
            // <DisplayInvoice />
            <InsertDataInvoice />
          ) : (
            <div className="flex justify-center items-center h-[50rem]">
              <div className="text-md font-medium">{errorMessage}</div>
            </div>
          )}
        </main>
      </div>
    );
  } else {
    return (
      <div className=" h-[50rem] flex justify-center items-center">
        <button
          className="border-2 border-black rounded py-2 px-10 font-bold hover:bg-black hover:text-stone-100 transition"
          onClick={() => signIn()}
        >
          Sign in
        </button>
      </div>
    );
  }
}
