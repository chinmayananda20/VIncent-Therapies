import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#4CECD6] py-10 px-6 sm:px-10">
      <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-10">
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center">
            <img src={logo} className="rounded-full h-14" alt="Logo" />
            <p className="font-bold text-2xl sm:text-3xl ml-4 mt-2 md:mt-0 cursor-pointer">
              Vincent Therapies
            </p>
          </Link>
        </div>

        <div>
          <p className="font-bold text-xl mb-2">Quick Links</p>
          <p className="m-2 cursor-pointer hover:underline">
            <Link to="/about">About</Link>
          </p>
          <p className="m-2 cursor-pointer hover:underline">
            <Link to="/contact">Contact</Link>
          </p>
          <p className="m-2 cursor-pointer hover:underline">
            <Link to="/services">Services</Link>
          </p>
        </div>

        {/* Social & Contact */}
        <div>
          <p className="font-bold text-xl mb-2">Connect With Me</p>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 my-3">
            <FaLinkedin className="text-2xl sm:text-3xl text-white" />
            <a
              href="https://www.linkedin.com/in/roshan-vincent-3068695b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 my-3">
            <IoIosMail className="text-2xl sm:text-3xl text-white mt-1" />
            <a
              href="mailto:roshan.vincent@behavioraltherapist.co.uk"
              className="text-sm sm:text-base hover:underline break-all"
            >
              roshan.vincent@behavioraltherapist.co.uk
            </a>
          </div>

          <div className="flex items-start gap-3 my-3">
            <MdLocalPhone className="text-2xl sm:text-3xl text-white mt-1" />
            +44 7808 213247
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
