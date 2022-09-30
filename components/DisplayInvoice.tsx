import { useState } from "react";

export const DisplayInvoice = () => {
  const [data, setData] = useState({ day: null, price: null });

  return (
    <div className="grid grid-cols-4 max-w-5xl mx-auto mt-20">
      <div className="col-span-2">
        <div className="text-4xl font-extrabold uppercase">Invoice</div>
        <div className="font-bold text-md mt-4">Cozy & Sweet Homestay</div>
        <div className="font-normal mt-1">
          Bayview Villas Port Dickson <br /> Bt 7, Jalan Pantai Teluk Kemang{" "}
          <br /> 71050 Sirusa Port Dickson <br /> Negeri Sembilan Darul Khusus
        </div>
      </div>
      <div></div>
      <div className="flex flex-col items-center">
        <div className="">logo</div>
        <div className="text-center ">+6019 3099 359</div>
      </div>
      <div className=" col-span-4 mt-8">
        <table className="w-full">
          <thead className="border-t-2 border-b-2 border-stone-800 font-semibold uppercase">
            <tr className="text-center p-4">
              <th className="w-2/3 p-2">Description</th>
              <th className="w-1/6 p-2"></th>
              <th className="w-1/6 p-2">Amount</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* Repeat here */}
            <tr>
              <td className="flex">
                <table className="w-full mt-2">
                  <tr>
                    <td className="w-1/3 text-left font-semibold">
                      Customer Name
                    </td>
                    <td className="w-2/3 text-left">Chai Seong Shih</td>
                  </tr>
                </table>
              </td>
              <td></td>
            </tr>
            <tr>
              <table className="w-full mt-2">
                <tr>
                  <td className="w-1/3 text-left font-semibold">Period</td>
                  <td className="w-2/3 text-left">
                    27/12/2022 - 28/12/2022 1 night(s)
                  </td>
                </tr>
              </table>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <table className="w-full mt-2">
                <tr>
                  <td className="w-1/3 text-left font-semibold">
                    Total Charges
                  </td>
                </tr>
              </table>
              <td></td>
              <td>300.00</td>
            </tr>
            <tr className="">
              <td></td>
              <td className="text-xl font-bold p-6">Grand Total</td>
              <td className=" text-xl font-bold">RM 300</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>
                <button
                  type="button"
                  className="mt-10 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-zinc-900 hover:bg-stone-600 text-white font-bold uppercase py-2 px-4 mr-1 rounded tracking-wider"
                >
                  Share
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
