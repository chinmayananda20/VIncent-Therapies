import React from "react";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import img from "../assets/img.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import ContactDetails from "./Contact_components/ContactDetails";
import { ToastContainer, toast } from "react-toastify";
import TestimonialBanner from "./Contact_components/TestimonialBanner";
const Contact = () => {
  const contactFormRef = React.useRef(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");
  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const contactSlideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };

  const contactSlideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const faqData = [
    {
      question: "What issues can CBT help with?",
      answer:
        "CBT is effective in treating anxiety, depression, OCD, trauma, stress, and more. It helps you understand how your thoughts, feelings, and behaviours are interconnected.",
    },
    {
      question: "How do I book",
      answer:
        "Booking an appoinment is easy! You can schedule your session online through our website or call us directly. We recommend booking in advance to secure your preferred time.",
    },
    {
      question: "How long is each session?",
      answer:
        "Each session typically lasts between 50 to 60 minutes. This duration allows for in-depth discussion and effective therapeutic work. We also offer longer sessions if needed.",
    },
    {
      question: "What services are offered?",
      answer:
        "We offer a range of services including Cognitive Behavioural Therapy (CBT), EMDR, and psychoeducational support. Our treatments are tailored to address various mental health issues. Each sessionis designed to support you unique needs.",
    },
    {
      question: "What if I need to cancel the session?",
      answer:
        "If you need to cancel, please notify us at least 24 hours in advance. This allows us to offer your slot to another client. We understand that emergencies happen, and we will do our best to accomodate you.",
    },
  ];

  const handlesubmit = async (e) =>{
     e.preventDefault();
      if (name === "") {
      toast.error("Please Enter Your Name", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (email === "") {
      toast.error("Please Enter Your Mail Id", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (message === "") {
      toast.error("Please Enter Your  Message", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (phone === "") {
      toast.error("Please Enter Your Phone Number", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else{
      let response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, phone }),  
      });
      const res = await response.json();
      if (res.message === "Message sent successfully") {
        toast.success(res.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setname("");
        setemail("");
        setphone("");
        setmessage("");
      } else {
        toast.error(res.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setname("");
        setemail("");
        setphone("");
        setmessage("");
      }
    }
  }

  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const teaser = answer.slice(0, 100) + (answer.length > 100 ? "..." : "");

    return (
      <div className="border-b border-gray-300 py-4 transition-all duration-300">
        <button
          className="w-full flex justify-between items-center text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">{question}</h3>
          <span className="text-sm text-blue-600">
            {isOpen ? "Read less" : "Read more"}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 mt-2 opacity-100" : "max-h-20 mt-2 opacity-90"
          }`}
        >
          <p className="text-gray-700">{isOpen ? answer : teaser}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <ToastContainer />

      <div
        className="relative h-[500px] flex justify-center items-center flex-col text-white"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        <div className="relative z-10 text-center animate__animated animate__zoomIn">
          <p className="text-lg">Connect</p>
          <p className="font-bold text-5xl m-7">Reach Out Today</p>
          <p className="m-5 max-w-xl mx-auto">
            We're here to support you. Contact us for appointments or any
            enquiries you may have.
          </p>
          <div className="flex justify-center m-3">
            <button
              onClick={scrollToContactForm}
              className="font-bold mx-2 cursor-pointer hover:bg-[#026659] bg-[#4CECD6] text-white px-4 sm:px-6 py-2"
            >
              Contact
            </button>
            <button className="mx-2 font-bold cursor-pointer hover:underline border border-white px-4 sm:px-6 py-2">
              Schedule
            </button>
          </div>
        </div>
      </div>

      <ContactDetails />

      <TestimonialBanner />

      <div
        ref={contactRef}
        className="w-full flex flex-col lg:flex-row justify-between items-start px-6 py-16 gap-10"
      >
        <motion.div
          ref={contactFormRef}
          className="w-full lg:w-[45%] md:m-16"
          variants={contactSlideLeft}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
        >
          <p className="font-bold text-3xl mb-4">Get in Touch</p>
          <p className="text-base text-gray-700 mb-6">
            We are here to support you. Reach out to us anytime for assistance.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <IoIosMail className="text-2xl mr-2 text-[#026659]" />
              <span className="text-gray-800 underline">
                roshan.vincent@behavioraltherapist.co.uk
              </span>
            </div>
            <div className="flex items-center">
              <MdLocalPhone className="text-2xl mr-2 text-[#026659]" />
              <span className="text-gray-800 underline">+44 7808 213247</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[50%] bg-white shadow-lg p-6 rounded-lg"
          variants={contactSlideRight}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
        >
          <h2 className="text-xl font-semibold mb-4 text-[#026659]">Contact</h2>
          <form className="space-y-4" onSubmit={handlesubmit}>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CECD6]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CECD6]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CECD6]"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                className="w-full h-28 px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#4CECD6]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4CECD6] hover:bg-[#026659] text-white font-semibold py-2 rounded transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>

      <div
        ref={faqRef}
        className="w-full flex flex-col md:flex-row md:justify-around items-center my-16"
      >
        <motion.div
          className="w-full md:w-[50%] text-center md:text-left"
          variants={slideLeft}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
        >
          <p className="font-bold text-3xl">FAQs</p>
          <p className="my-5">
            Find answers to our common questions about therapy services and
            appointment bookings
          </p>
          <button
            onClick={scrollToContactForm}
            className="border border-black rounded hover:underline p-3"
          >
            Contact
          </button>
        </motion.div>

        <motion.div
          className="w-[70%] md:w-[40%]"
          variants={slideRight}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
