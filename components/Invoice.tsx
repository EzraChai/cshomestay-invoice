export const Invoice = () => {
  return (
    <div className="grid grid-cols-4 max-w-5xl mx-auto mt-20">
      <div className="col-span-2">
        <div className="text-4xl font-extrabold uppercase">Invoice</div>
        <div className="font-bold text-md mt-4">C&S Homestay</div>
        <div className="font-normal mt-1">
          Bayview Villas Port Dickson <br /> Bt 7, Jalan Pantai Teluk Kemang{" "}
          <br /> 71050 Sirusa Port Dickson <br /> Negeri Sembilan Darul Khusus
        </div>
      </div>
      <div className="logo col-span-2"> Logo</div>
      <div className=" col-span-4 mt-8">
        <table className="w-full">
          <thead className="border-t-2 border-b-2 border-stone-800 font-semibold uppercase">
            <tr className="text-center p-4">
              <th className="w-1/6 p-2">Day</th>
              <th className="w-3/6 p-2">Description</th>
              <th className="w-1/6 p-2">Price</th>
              <th className="w-1/6 p-2">Amount</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* Repeat here */}
            <tr>
              <td className="p-4">1</td>
              <td className="text-left">Booking from 3232mkm to m sdms</td>
              <td>300.00</td>
              <td>300.00</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="p-2">Subtotal</td>
              <td>300.00</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className="text-xl font-bold">Total</td>
              <td className="text-xl font-bold">RM 300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
