import { TextInput, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { DateRangePickerValue } from "@mantine/dates";

import { BookHotelDatePicker } from "./BookHotelDatePicker";

export const InsertDataInvoice = () => {
  const [value, setValue] = useState<DateRangePickerValue>();

  const form = useForm({
    initialValues: {
      customerName: "",
    },
  });
  return (
    <Box className="mt-20" sx={{ maxWidth: 500 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          sx={{ borderColor: "black" }}
          withAsterisk
          size="md"
          radius="md"
          label="Customer's name"
          placeholder="Ezra Chai"
        />
        <BookHotelDatePicker value={value} onChange={setValue} />
      </form>
    </Box>
  );
};
