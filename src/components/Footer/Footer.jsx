import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's discuss to make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:uatta2220@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Shah Faisal Colony, Karachi, Sindh, Pakistan</p>
          </div>
          <ul className={css.menu}>
            <a
              href="https://www.linkedin.com/in/atta-ullah-5661171a4/"
              style={{
                color: "inherit",
              }}
            >
              <li>Linkedin</li>
            </a>

            <li>0309-2656612</li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
