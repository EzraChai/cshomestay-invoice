import { DateRangePicker } from "@mantine/dates";

export const BookHotelDatePicker = ({ dateRange, setDateRange }: any) => {
  return (
    <DateRangePicker
      required
      className="mt-4"
      label="Book hotel"
      radius="md"
      size="xl"
      placeholder="Pick dates range"
      value={dateRange}
      onChange={setDateRange}
      firstDayOfWeek="sunday"
      withAsterisk
    />
  );
};
