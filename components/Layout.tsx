import { Header } from "./Header";
import { Head } from "next/document";

export const Layout = ({ children }: any) => {
  return (
    <div className="bg-stone-200 w-[full] h-screen">
      <Header />
      {children}
    </div>
  );
};
