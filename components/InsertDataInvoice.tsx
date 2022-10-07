import { TextInput, Box, Select } from "@mantine/core";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { DateRangePickerValue } from "@mantine/dates";
import { AiOutlineLoading } from "react-icons/ai";

import { BookHotelDatePicker } from "./BookHotelDatePicker";

export const InsertDataInvoice = () => {
  const router = useRouter();

  const [dateRange, setDateRange] = useState<DateRangePickerValue>();
  const [customerName, setCustomerName] = useState<string>("");
  const [customerPrefix, setCustomerPrefix] = useState<string>("");
  const [pricePerDay, setPricePerDay] = useState<number>(300);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTotalPrice(pricePerDay);
  }, [pricePerDay]);

  useEffect(() => {
    const dateArray = dateRange
      ?.toLocaleString()
      .split(" ")
      .join("")
      .split(",")
      .filter((value: string) => value !== "00:00:00");

    if (dateArray && dateArray[0] && dateArray[1]) {
      const date1: Date = stringToCorrectDate(dateArray[0]);
      const date2: Date = stringToCorrectDate(dateArray[1]);
      const diffTime = dateDiffInDays(date1, date2);
      setTotalPrice(pricePerDay * diffTime);
    }
  }, [dateRange]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    const requestData = {
      day: dateRange?.toLocaleString(),
      pricePerDay: pricePerDay,
      totalPrice: totalPrice,
      prefix: customerPrefix,
      customer: customerName,
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

    if (response.ok) {
      const { data } = await response.json();
      console.log(data);

      router.push({
        pathname: "/invoice",
        query: {
          data: JSON.stringify(data),
        },
      });
    }

    setLoading(false);
  };

  return (
    <Box className="mt-40" sx={{ maxWidth: 500 }} mx="auto">
      <form onSubmit={handleSubmit} method="post">
        <TextInput
          onChange={(e) => setCustomerName(e.target.value)}
          value={customerName}
          required
          sx={{ borderColor: "black" }}
          withAsterisk
          size="xl"
          radius="md"
          label="Customer's name"
          placeholder="Ezra Chai"
        />
        <Select
          className="mt-4"
          onChange={(e) => setCustomerPrefix("" + e)}
          label="Customer's prefix"
          value={customerPrefix}
          placeholder="Pick a prefix"
          data={["Mr.", "Mrs."]}
          withAsterisk
          required
          size="xl"
          radius="md"
        />

        <TextInput
          onChange={(e) => setPricePerDay(parseInt(e.target.value))}
          className="mt-4"
          value={pricePerDay}
          required
          sx={{ borderColor: "black" }}
          withAsterisk
          size="xl"
          radius="md"
          label="Price"
          type={"number"}
          placeholder="300"
        />

        <TextInput
          onChange={(e) => setTotalPrice(parseInt(e.target.value))}
          className="mt-4"
          value={totalPrice}
          required
          sx={{ borderColor: "black" }}
          withAsterisk
          size="xl"
          radius="md"
          label="Total price"
          type={"number"}
          placeholder="300"
        />

        <BookHotelDatePicker
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
        <div className="w-full flex justify-end mt-8 p-2">
          {loading ? (
            <button
              disabled
              className=" w-24 flex justify-center items-center border scale-125 border-black rounded-lg p-2 font-bold bg-black text-white"
            >
              <AiOutlineLoading className="animate-spin w-6 h-6" />
            </button>
          ) : (
            <button
              type="submit"
              className="border scale-125 border-black rounded-lg p-3 font-bold bg-black text-white hover:bg-transparent hover:text-stone-800 transition"
            >
              Generate
            </button>
          )}
        </div>
      </form>
    </Box>
  );
};

function dateDiffInDays(a: any, b: any) {
  return Math.ceil(Math.abs(b - a) / (1000 * 60 * 60 * 24));
}

function stringToCorrectDate(date: string): Date {
  const dateArray = date.split("/");
  const day = dateArray[0];
  dateArray[0] = dateArray[1];
  dateArray[1] = day;
  return new Date(dateArray.join("-"));
}
