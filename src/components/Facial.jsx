import { facialData } from "./button";

export function Facial() {
  return (
    <>
      <div>
        {facialData.map((Facial) => (
          <div key={Facial.id} className="des-image">
            <h3 key={Facial.id}>{Facial.name}</h3>
            <p key={Facial.id} className="price">
              {Facial.price} $
            </p>
            <button className="but">Book</button>
          </div>
        ))}
      </div>
    </>
  );
}
