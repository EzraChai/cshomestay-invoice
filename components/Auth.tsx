import { useSession, signIn, signOut } from "next-auth/react";
import { DisplayInvoice } from "./DisplayInvoice";
export default function Auth() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="text-stone-100 flex items-center">
        <button
          className="border-2 border-white rounded p-2 font-bold hover:bg-stone-100 hover:text-stone-800 transition"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="text-stone-100 flex items-center">
      <button
        className="border-2 border-white rounded p-2 font-bold hover:bg-stone-100 hover:text-stone-800 transition"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
}
