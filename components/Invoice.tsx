import { FormEvent, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

type InvoiceData = {
  day: number | null;
  price: number | null;
  gender: "man" | "woman" | string;
  customer: string;
};

export const Invoice = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [respStatus, setRespStatus] = useState("fndfkndkn");
  const [data, setData] = useState<InvoiceData>({
    day: 1,
    price: null,
    gender: "man",
    customer: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    const requestData = {
      day: data.day,
      price: data.price,
      gender: data.gender,
      customer: data.customer,
    };
    const JSONdata = JSON.stringify(requestData);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    console.log(response);
    if (response.status !== 400) {
    }

    const result = await response.json();
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} method={"post"}>
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
        <div className="logo"> Logo</div>
        <div className="col-span-4">
          <div className="mt-4 font-bold text-md mb-1">Name</div>
          <select
            defaultValue={data.gender}
            name="gender"
            id="gender"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                gender: e.target.value,
              }))
            }
            className="w-15 border-2 rounded border-black p-1 pr-2 bg-white"
          >
            <option value="man">Mr.</option>
            <option value="woman">Mrs.</option>
          </select>
          <input
            type="text"
            className="ml-2 w-1/2 border-2 rounded border-black p-1"
            name="customer"
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                customer: e.target.value,
              }))
            }
            value={data.customer}
            required
          />
        </div>
        <div className=" col-span-4 mt-8">
          <table className="w-full">
            <thead className="border-t-2 border-b-2 border-stone-800 font-semibold uppercase">
              <tr className="text-center p-4">
                <th className="w-1/12 p-2">Day</th>
                <th className="w-3/6 p-2">Description</th>
                <th className="w-1/6 p-2">Price</th>
                <th className="w-1/6 p-2">Amount</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Repeat here */}
              <tr>
                <td className="p-4">
                  <input
                    type="text"
                    className="w-12 border-2 rounded border-black p-1"
                    pattern="[1-9]"
                    name="day"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        day: parseInt(e.target.value),
                      }))
                    }
                    defaultValue={1}
                  />
                </td>
                <td className="text-left">Booking from 3232mkm to m sdms</td>
                <td>
                  <input
                    type="text"
                    name="price"
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        price: parseInt(e.target.value),
                      }))
                    }
                    className="w-20 border-2 rounded border-black p-1"
                    required
                  />
                </td>
                <td>
                  {data.price && data.day
                    ? (data.price * data.day).toFixed(2)
                    : (0).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="p-2">Subtotal</td>
                <td>
                  {data.price && data.day
                    ? (data.price * data.day).toFixed(2)
                    : (0).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td className="text-xl font-bold">Total</td>
                <td className="text-xl font-bold">
                  RM{" "}
                  {data.price && data.day
                    ? (data.price * data.day).toFixed(2)
                    : (0).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-10 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-zinc-900 hover:bg-stone-600 text-white font-bold uppercase py-2 px-4 mr-1 rounded tracking-wider"
                  >
                    {loading ? (
                      <div className="flex">
                        <AiOutlineLoading className="animate-spin w-6 h-6" />
                      </div>
                    ) : (
                      "Generate"
                    )}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};
