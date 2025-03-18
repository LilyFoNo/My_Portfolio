"use client";
import { useState, useRef, FormEvent } from "react";
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "68823846-8498-410f-80ef-fb47ea86cb42",
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }
  }
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
        <div className="lg:mt-12 lg:flex-row flex-col-reverse flex gap-10 overflow-hidden">
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
                <span className="text-white font-medium mb-4 font-preahvihear">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium font-preahvihear"
                />
              </label>

              <label htmlFor="email" className="flex flex-col">
                <span className="text-white font-medium mb-4 font-preahvihear">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium font-preahvihear"
                />
              </label>

              <label htmlFor="message" className="flex flex-col">
                <span className="text-white font-medium mb-4 font-preahvihear">
                  Your Message
                </span>
                <textarea
                  rows={7}
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium font-preahvihear"
                />
              </label>

              <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md  shadow-primary rounded-xl font-shadowsIntoLight text-xl"
              >
                {loading ? "sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="lg:flex lg:flex-1 xl:h-auto hidden"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ContactComponent;
