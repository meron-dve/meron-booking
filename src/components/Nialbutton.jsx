import { nailData } from "./button";

export function Nail() {
  return (
    <>
      <div>
        {nailData.map((nail) => (
          <div key={nail.id} className="des-image">
            <h3 key={nail.id}>{nail.name}</h3>
            <p key={nail.id} className="price">
              {nail.price} $
            </p>
            <button className="but">Book</button>
          </div>
        ))}
      </div>
    </>
  );
}
