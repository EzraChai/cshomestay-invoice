import { useState } from "react";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";

export const BookHotelDatePicker = ({ value, setValue }: any) => {
  return (
    <DateRangePicker
      className="mt-4"
      label="Book hotel"
      radius="md"
      size="md"
      withAsterisk
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
      firstDayOfWeek="sunday"
    />
  );
};
