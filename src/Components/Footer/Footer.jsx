import React from "react";
import "./footer.css";
import logo from "./photo.svg";
import { FaTelegram, FaWhatsapp, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="contact">
                <em>Наши контакты :</em>
                <span><a href="tel: +74951234567"><FaPhone size="1rem"/> +7(977)123-45-67 </a></span>
                <span><a href="https://web.telegram.org/a/"><FaTelegram size="2rem" color="white"/></a></span>
                <span><a href="https://web.whatsapp.com/"><FaWhatsapp size="2rem" color="white"/></a></span>
            </div>
            <div className="size">
                <img className="size-logo" width={60} height={60} src={logo} alt="" />
          </div>
      </div>
    </footer>
  );
};

export default Footer;