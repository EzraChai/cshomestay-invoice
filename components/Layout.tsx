import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
};
