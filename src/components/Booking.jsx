//import dayjs from "dayjs";
import { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import dayjs from "dayjs";
export function Booking(props) {
  const [value, setValue] = useState(dayjs());
  return (
    <>
      <div className="datetime-selection">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DemoItem label="Responsive variant">
              <DateTimePicker
                id={props.bookingId}
                label="Controlled picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>{" "}
        <button className="next">Next</button>
      </div>
    </>
  );
}
