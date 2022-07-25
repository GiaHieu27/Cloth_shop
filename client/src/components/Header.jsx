import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo-2.png";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
  {
    display: "Liên hệ",
    path: "/contact",
  },
];

function Header() {
  const { cartItems } = useSelector((state) => state.cart);

  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((i) => i.path === pathname);

  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scroll > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
  }, []);

  const leftMenuRef = useRef(null);
  const handleToggleMenu = () => {
    leftMenuRef.current.classList.toggle("active");
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="header_logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className="header_menu">
          <div
            className="header_menu_mobile-toggle"
            onClick={() => handleToggleMenu()}
          >
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header_menu_left" ref={leftMenuRef}>
            <div
              className="header_menu_left_close"
              onClick={() => handleToggleMenu()}
            >
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, i) => (
              <div
                className={`header_menu_left_item header_menu_item ${
                  i === activeNav ? "active" : ""
                }`}
                key={i}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="header_menu_right">
            <div className="header_menu_right_item header_menu_item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
                {cartItems && cartItems.length > 0 && (
                  <div className="circle">
                    <span>{cartItems.length}</span>
                  </div>
                )}
              </Link>
            </div>
            <div className="header_menu_right_item header_menu_item">
              <Link to="/login">
                <i className="bx bx-user"></i>
              </Link>
            </div>
            <div className="header_menu_right_item header_menu_item">
              <i className="bx bx-search"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
