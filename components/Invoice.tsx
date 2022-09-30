import { FormEvent, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdError } from "react-icons/md";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayRange } from "react-modern-calendar-datepicker";

type InvoiceData = {
  day: number | null;
  price: number | null;
  gender: "man" | "woman" | string;
  customer: string;
};

export const Invoice = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [respStatus, setRespStatus] = useState<null | string>("");
  const [selectedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState<InvoiceData>({
    day: 1,
    price: null,
    gender: "man",
    customer: "",
  });
  const [response, setResponse] = useState<InvoiceData>();
  const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
    from: null,
    to: null,
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
    if (response.status !== 200) {
      const result = await response.json();
      setRespStatus(result.data);
      setLoading(false);
    } else {
      setResponse({
        day: data.day,
        price: data.price,
        gender: data.gender,
        customer: data.customer,
      });

      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} method={"post"}>
      <div className="grid grid-cols-4 max-w-5xl mx-auto mt-20">
        {respStatus && (
          <div className="flex col-span-4 text-normal bg-red-200 text-red-700 font-semibold w-full mx-auto rounded-full px-4 py-1 mb-6">
            <MdError className="text-red-700 w-6 h-6 mr-2" />
            {respStatus}
          </div>
        )}
        <div className="col-span-2">
          <div className="text-4xl font-extrabold uppercase">Invoice</div>
          <div className="font-bold text-md mt-4">Cozy & Sweet Homestay</div>
        </div>
        <div></div>
        <div className="logo"> Logo</div>
        <div className="col-span-4">
          {response ? (
            <>
              <div className="flex">
                {response.gender === "man" && "Mr."}
                {response.gender === "woman" && "Mrs."}
                <div className="ml-1">{response.customer}</div>
              </div>
            </>
          ) : (
            <div>
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
          )}
        </div>
        <div className=" col-span-4 mt-8">
          <table className="w-full">
            <thead className="border-t-2 border-b-2 border-stone-800 font-semibold uppercase">
              <tr className="text-center p-4">
                <th className="w-1/12 p-2">Day</th>
                <th className="w-3/6 p-2">Booking Date</th>
                <th className="w-1/6 p-2">Price</th>
                <th className="w-1/6 p-2 bg-slate-200">Amount</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {/* Repeat here */}
              <tr>
                <td className="p-4">
                  {response ? (
                    <div className="w-12 p-1">{response.day}</div>
                  ) : (
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
                  )}
                </td>
                <td>
                  <div className="justify-center flex items-center mt-4 absolute">
                    <Calendar
                      value={selectedDayRange}
                      onChange={setSelectedDayRange}
                      calendarClassName="responsive-calendar" // added this
                      colorPrimary="black" // added this
                      colorPrimaryLight="rgb(226,232,240)" // and this
                      shouldHighlightWeekends
                    />
                  </div>
                </td>
                <td>
                  {response ? (
                    <div>{response.price}</div>
                  ) : (
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
                  )}
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
