import "./Slide.sass";
import { Slider } from "infinite-react-carousel";
import CatCard from "../CatCard/CatCard.jsx";
import { cards } from "../../data.js";

export const Slide = ({ slidesToShow, arrowsScroll, children }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
