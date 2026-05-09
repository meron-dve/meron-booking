//import dayjs from "dayjs";
import { useState } from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import PropTypes from 'prop-types'
import {hairData, facialData, skinData ,nailData } from './button'



import dayjs from "dayjs";

 function getCurrentServiceData (activeServiceType) {
    switch(activeServiceType) {
      case 'hair-styling':
        return hairData;
      case 'nail-art':
        return nailData;
      case 'facial':
        return facialData;
      case 'skin-care':
        return skinData;

    }
  }

  function getSlots(
  durationInHour
) {

 
  const startWorkingTime = 8;
  const endWorkingTIme = 16;

  const slots = []

  for(let i = startWorkingTime; i <= endWorkingTIme; i = i + durationInHour ) {
   
    slots.push(i)
  }

 
  return slots

}
export function Booking({
  bookingItemId,
  activeServiceType
}) {
  const [value, setValue] = useState(dayjs());


const  currentServiceData = getCurrentServiceData(activeServiceType)
    
const currentBookedItem = currentServiceData.find(item => item.id === bookingItemId)


const durationInHour  =  currentBookedItem.duration / 60
 


// make slopts


const slots = getSlots(durationInHour)

 
  return (
    <>
      <div className="datetime-selection">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DemoItem label="Responsive variant">

              <p>
                Type: {activeServiceType} <br />
                You are booking: {currentBookedItem.name}
              </p>
              <DateTimePicker
                label="Controlled picker"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </DemoItem>
          </DemoContainer>

          {value && slots.length > 0 && (
            <div>
              <p> Pelase pick a slots</p>
              <ul> 
              {slots.map((slot, index) => index === slots.length-1 ? null: (
                <li key={index}>
                  {slot} - {index < slots.length ? slots[index+1]: '.'}
                </li>
              ))}
              </ul>
            </div>
          ) }
        </LocalizationProvider>{" "}
        <button className="next">Next</button>
      </div>
    </>
  );
}

Booking.propTypes = {
  bookingItemId: PropTypes.string.isRequired,
  activeServiceType: PropTypes.string.isRequired
}
