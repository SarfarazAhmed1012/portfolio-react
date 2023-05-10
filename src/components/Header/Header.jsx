import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const handleMenuClick = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  };

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Atta Ullah</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#experties">About me</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>

          <li className={`flexCenter ${css.phone}`}>
            <p>+923092656612</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div className={css.mobile_menu}>
          <BiMenuAltRight size={30} onClick={handleMenuClick} />
        </div>
        {mobileMenu && (
          <div className={css.navbar}>
            <div className="navbar-toggle">
              <BiMenuAltRight size={30} onClick={handleMenuClick} />
            </div>
            <div className={css.navbar_menu}>
              <ul>
                <li onClick={handleMenuClick}>
                  <a href="#experties">About me</a>
                </li>
                <li onClick={handleMenuClick}>
                  <a href="#work">Experience</a>
                </li>
                <li onClick={handleMenuClick}>
                  <a href="#portfolio">Portfolio</a>
                </li>

                <li>
                  <p>+923092656612</p>
                  <BiPhoneCall size={"40px"} />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
