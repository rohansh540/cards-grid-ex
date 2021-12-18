import "./styles.css";
import heartof2 from "./images/heartof2.png";
import club2 from "./images/club-2.png";
import diamond2 from "./images/diamond-2.png";
import spade2 from "./images/spade-2.png";

export default function App() {
  const cards = [heartof2, club2, diamond2, spade2];
  return (
    <div className="box">
      {cards.length && cards.map((card) => <img src={card} alt="cards" />)}
    </div>
  );
}
