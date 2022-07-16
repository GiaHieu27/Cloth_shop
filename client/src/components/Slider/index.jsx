import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import SliderItem from "./SliderItem";

function Slider({ data, control, timeOutt, auto }) {
  const [activeSlice, setActiveSlice] = useState(0);
  const timeOut = timeOutt ? timeOutt : 3000;

  const prevSlice = () => {
    const index = activeSlice - 1 < 0 ? data.length - 1 : activeSlice - 1;
    setActiveSlice(index);
  };

  const nextSlice = useCallback(() => {
    const index = activeSlice + 1 > data.length - 1 ? 0 : activeSlice + 1;
    setActiveSlice(index);
  }, [activeSlice, data]);

  useEffect(() => {
    if (auto) {
      const slideAuto = setInterval(() => nextSlice(), timeOut);

      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlice, timeOut, auto]);

  return (
    <div className="slider">
      {data.map((item, index) => (
        <SliderItem key={index} item={item} active={index === activeSlice} />
      ))}

      {control ? (
        <div className="slider_control">
          <div className="slider_control_item" onClick={() => prevSlice()}>
            <i className="bx bx-chevron-left"></i>
          </div>
          <div className="slider_control_item">
            <div className="index">
              {activeSlice + 1}/{data.length}
            </div>
          </div>
          <div className="slider_control_item" onClick={() => nextSlice()}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

export default Slider;
