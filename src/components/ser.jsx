 import { hairData } from "./button";
import PropTypes from 'prop-types'

//import { Booking } from "./Booking";


export function Ser({content , handleBooking}) {
  const currentBooking = hairData.find(
    (booking) => booking.id === content,
  );
  console.log('current booking >', currentBooking)
 
  return (
    <>
      <div>
        {hairData.map((hair) => (
          <div key={hair.id} className="des-image">
            <h3>{hair.name}</h3>
            <p className="pric">
              {hair.price} $
            </p>
            <button
              className="but"
              onClick={() => {
                handleBooking(hair.id);
              }}
            >
              Book
            </button>
          </div>
        ))}

      
      </div>
    </>
  );
}

Ser.propTypes = {
  content: PropTypes.string,
  handleBooking: PropTypes.func.isRequired
}

Ser.defaultProps = {
  content: null
}