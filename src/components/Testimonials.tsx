import { useState } from "react";
import avatar1 from "../images/image-tanya.jpg";
import avatar2 from "../images/image-john.jpg";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [slider, setSlider] = useState<boolean>(true);

  const handlePrev = () => {
    setSlider(!slider);
  };

  const variants = {
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
    hidden: {
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    /*   transition : { duration: 0.5, ease: "easeInOut" }  */
  };
  return (
    <section className="container">
      <div className="section-testimonial">
        <div className="section-img">
          {slider ? (
            <motion.img
              initial="hidden"
              animate="visible"
              variants={variants}
              src={avatar1}
              alt="img-1"
            />
          ) : (
            <img src={avatar2} alt="img-2" />
          )}
          <div className="section-buttons">
            <button onClick={handlePrev} className="btn prev">
              {" "}
            </button>
            <button onClick={handlePrev} className="btn next">
              {" "}
            </button>
          </div>
        </div>
        <div className="section-text">
          {slider ? (
            <>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
              >
                “ I’ve been interested in coding for a while but never taken the
                jump, until now. I couldn’t recommend this course enough. I’m
                now in the job of my dreams and so excited about the future. ”
              </motion.p>
              <div className="user">
                <motion.h4
                  initial={{ x: -100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  Tanya Sinclair
                </motion.h4>
                <motion.h5
                  initial={{ x: -100, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  UX Engineer
                </motion.h5>
              </div>
            </>
          ) : (
            <>
              <p>
                “ If you want to lay the best foundation possible I’d recommend
                taking this course. The depth the instructors go into is
                incredible. I now feel so confident about starting up as a
                professional developer. ”
              </p>
              <div className="user">
                <h4>John Tarkpor</h4>
                <h5>Junior Front-end Developer</h5>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
