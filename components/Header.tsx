import { FaFileInvoice } from "react-icons/fa";
import Auth from "./Auth";

export const Header = () => {
  return (
    <header className="md:h-[50px] print:hidden">
      <div className=" bg-stone-900">
        <div className="wrapper px-4 py-2 md:py-3 md:px-8">
          <div className="inner-header relative z-[60] h-[50px] flex justify-between items-center">
            <div className="logo font-[700] md:text-2xl flex items-center">
              <div className="px-2 text-stone-100">
                <FaFileInvoice />
              </div>
              <div className="text-stone-100">Cozy & Sweet.</div>
            </div>
            <div className="">
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
