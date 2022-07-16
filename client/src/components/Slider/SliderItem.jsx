import { Link } from "react-router-dom";

function SliderItem({ item, active }) {
  return (
    <div className={`slider_item ${active ? "active" : ""}`}>
      <div className="slider_item_info">
        <div className={`slider_item_info_title color-${item.color}`}>
          <span>{item.title}</span>
        </div>
        <div className="slider_item_info_desc">
          <span>{item.description}</span>
        </div>
        <div className="slider_item_info_btn">
          <Link to={item.path}>
            <button>Xem chi tiet</button>
          </Link>
        </div>
      </div>

      <div className="slider_item_image">
        <div className={`shape bg-${item.color}`}></div>
        <img src={item.img} alt="slider-img" />
      </div>
    </div>
  );
}

export default SliderItem;
