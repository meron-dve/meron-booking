import { skinData } from "./button";
import { useState } from "react";
export function Skin() {
  const [visible, setVisible] = useState(false);
  const handleBooking = () => {
    setVisible(!visible);
  };
  return (
    <>
      <div>
        {skinData.map((skin) => (
          <div key={skin.id} className="des-image">
            <h3 key={skin.id}>{skin.name}</h3>
            <p key={skin.id} className="price">
              {skin.price} $
            </p>
            <button className="but" onClick={handleBooking}>
              Book
            </button>
          </div>
        ))}
      </div>
      <div>{visible && <Booking />}</div>
    </>
  );
}
