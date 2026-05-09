import About from "./About.jsx";
import { useState } from "react";
import "../App.css";

import Main from "./Main.jsx";
import { Ser } from "./ser.jsx";
import { Nail } from "./Nialbutton.jsx";
import { Facial } from "./Facial.jsx";
import { Skin } from "./Skin.jsx";
import { TopNavigation } from "./TopNavigation.jsx";
import { Cost } from "./Cost.jsx";
import { Booking } from './Booking.jsx'

function Home() {
  const [activeServiceType, setActiveServiceType] = useState("hair-styling");
  const [visible, setVisible] = useState(false);
  const handleBooking = (bookingId) => {
    setVisible(bookingId);
  };

  return (
    <>
      <div className="home-screen">
        <TopNavigation />

        <div className="serivce-part">
          <h2>Our Serivices</h2>
        </div>
        <div className="ser-button">
          <div>
            <button
              className={
                activeServiceType === "hair-styling" ? "active-btn" : "btn"
              }
              onClick={() => setActiveServiceType("hair-styling")}
            >
              Hair Styling
            </button>
          </div>
          <br />
          <div>
            <button
              className={
                activeServiceType === "nail-art" ? "active-btn" : "btn"
              }
              onClick={() => setActiveServiceType("nail-art")}
            >
              Nail Art
            </button>
          </div>
          <br />
          <div>
            <button
              className={activeServiceType === "facial" ? "active-btn" : "btn"}
              onClick={() => setActiveServiceType("facial")}
            >
              Facial
            </button>
          </div>
          <br />
          <div>
            <button
              className={
                activeServiceType === "skin-care" ? "active-btn" : "btn"
              }
              onClick={() => setActiveServiceType("skin-care")}
            >
              Skin Care
            </button>
          </div>
          <br />
        </div>

        <div className="grid-bar">
          <div className="both">
            <div id="data-1">
              <div>
                {activeServiceType === "hair-styling" && (
                  <Ser handleBooking={handleBooking} content={visible}  />
                )}
              </div>
            </div>
            <div>
              <div>{activeServiceType === "nail-art" && <Nail />}</div>
            </div>
            <div>
              <div>{activeServiceType === "facial" && <Facial />}</div>
            </div>
            <div>
              <div>{activeServiceType === "skin-care" && <Skin />}</div>
            </div>
            <div className="cost">
              <Cost />
            </div>
          </div>
          <div>{visible && <Booking
          bookingItemId={visible}
          activeServiceType={activeServiceType}
          />}</div>
          <About />
          <Main />
        </div>
      </div>
    </>
  );
}
export default Home;
