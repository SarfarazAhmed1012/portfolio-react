import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./People.module.scss";
import Slider from "react-slick";
import { motion } from "framer-motion";
import {
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { Link } from "react-router-dom";
const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      section
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="people"></a>

      <motion.div
        variants={footerVariants}
        className={`yPaddings innerWidth ${css.container}`}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">My work</span>
          <p style={{ marginTop: "2rem" }}>
            Below is my work in the Web Development, DSA, OS, and Database.
          </p>
        </div>

        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                // <Link to={comment.link}>
                <div className={`flexCenter ${css.comment}`}>
                  {/* <img src={comment.img} alt="" /> */}
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                    <span>{comment.name}</span>
                    <span>{comment.post}</span>
                    <a href={comment.link} style={{ textDecoration: "none" }}>
                      <h4 style={{ marginTop: "20px", color: "yellow" }}>
                        View
                      </h4>
                    </a>
                  </div>
                </div>
                // </Link>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default People;
