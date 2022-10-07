import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Get data submitted in request's body.
  const body = req.body;

  if (
    !body.day ||
    !body.pricePerDay ||
    !body.customer ||
    !body.prefix ||
    !body.totalPrice
  ) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Something went wrong..." });
  }

  const dayArray = body.day
    .split(" ")
    .join("")
    .split(",")
    .filter((value: string) => value !== "00:00:00");

  const date1: Date = stringToCorrectDate(dayArray[0]);
  const date2: Date = stringToCorrectDate(dayArray[1]);
  const diffTime = dateDiffInDays(date1, date2);

  body.day = dayArray;
  body.diffTime = diffTime;

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: body });
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
