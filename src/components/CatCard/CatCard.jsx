import "./CatCard.sass";
import { cards } from "../../data.js";
import { Link } from "react-router-dom";

export default function CatCard({ item }) {
  console.log(cards);
  return (
    <Link to="/gigs?cat=design">
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}
