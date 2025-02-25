"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
// import emailjs from '@emailjs/browser'
import { staggerContainer } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const ContactComponent = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id="contact"
      >
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] gb-black-100 p-8 rounded-2xl"
          >
            <p className={`${styles.sectionSubText}`}>Get in Touch</p>
            <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mtt-12 flex flex-col gap-8"
            >
              <label htmlFor="name" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <label htmlFor="email" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <label htmlFor="message" className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md  shadow-primary rounded-xl"
              >
                {loading ? "sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactComponent;
