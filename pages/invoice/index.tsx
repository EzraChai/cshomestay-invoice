import Head from "next/head";
import { useSession, signIn } from "next-auth/react";
import { NextPage } from "next";
import { DisplayInvoice } from "../../components/DisplayInvoice";

interface Props {
  queryData?: Object;
}

const InvoicePage: NextPage<Props> = ({ queryData }) => {
  console.log(queryData);
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <div>
        <Head>
          <title>C&S Homestay Invoice Generator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <DisplayInvoice data={queryData} />
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
};

InvoicePage.getInitialProps = async ({ query }: any) => {
  return { queryData: JSON.parse(query.data) };
};

export default InvoicePage;
