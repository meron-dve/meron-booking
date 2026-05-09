import { Booking } from "./Booking";
import { hairData } from "./button";

//import { Booking } from "./Booking";

export function Ser(props) {
  const currentBooking = hairData.filter(
    (booking) => booking.id === props.content,
  );
  console.log("Props >", props);

  return (
    <>
      <div>
        {hairData.map((hair) => (
          <div key={hair.id} className="des-image">
            <h3 key={hair.id}>{hair.name}</h3>
            <p key={hair.id} className="pric">
              {hair.price} $
            </p>
            <button
              className="but"
              onClick={() => {
                props.handleBooking(hair.id);
              }}
            >
              Book
            </button>
          </div>
        ))}

        {currentBooking && <Booking />}
      </div>
    </>
  );
}
