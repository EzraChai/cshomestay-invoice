import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Get data submitted in request's body.
  const body = req.body;

  console.log("body: ", body);

  if (!body.day || !body.price || !body.customer || !body.gender) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: "Something went wrong..." });
  }

  // Found the name.
  // Sends a HTTP success code
  res.status(200).json({ data: body });
};
