import { motion as m } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Button from "../../components/Button";
import viteLogo from "/public/vite.svg";

function Contact() {
  // form submission
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uhosdk6", "template_mwk9x8l", form.current, {
        publicKey: "Bbx8DL5C-BAE7cuow",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // framer-motion variants
  const containerVariant = {
    hidden: {
      scaleY: 0,
      opacity: 0,
    },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const infoVariant = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 100,
      opacity: 0,
    },
  };

  const imgVariant = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 200,
      opacity: 0,
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#E7E1D4] flex justify-center items-end overflow-y-scroll no-scrollbar">
      <m.div
        className="w-full min-h-[50vh] bg-[#E4EDEB] py-10 border-zinc-400 border-t-[0.5px] shadow-lg flex justify-center items-center fixed bottom-0 origin-bottom"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex gap-10">
          <m.div
            className="flex flex-col justify-center items-start gap-8"
            variants={infoVariant}
          >
            <div>
              <h1 className="text-6xl font-semibold font-[Playfair]">
                Contact Me
              </h1>
              <p className="text-sm">
                I would love to get suggestions from you.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col justify-center gap-4">
              <input
                type="text"
                name="user_name"
                className="contact-info"
                placeholder="Your name"
              />
              <input
                type="email"
                name="user_email"
                className="contact-info"
                placeholder="Your e-mail address"
              />
              <input
                type="text"
                name="message"
                className="contact-info w-full"
                placeholder="Your message"
              />
              <button
                className="button text-sm px-6 py-2 mt-4 uppercase shadow-lg"
              >
              <input type="submit" value="Send" />
              </button>
            </form>
          </m.div>
          <m.div variants={imgVariant} whileHover={{ scale: 1.1 }}>
            <img src={viteLogo} alt="my-picture" />
          </m.div>
        </div>
      </m.div>
    </div>
  );
}

export default Contact;
