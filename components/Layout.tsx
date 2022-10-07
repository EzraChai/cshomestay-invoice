import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
