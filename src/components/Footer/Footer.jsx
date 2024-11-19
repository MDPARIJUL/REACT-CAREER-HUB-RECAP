import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className=" bg-black text-white text-base-content lg:p-20 p-10">
        <div className="footer ">
        <aside>
        <p className="text-4xl font-extrabold"> CareerHub</p>
        <p className="w-80 "> There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
        <div className="text-4xl text-white flex items-center gap-3">
            <span><SiFacebook /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
        </div>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
            <div className="flex justify-between items-center mt-24">
                <h3>@2023 CareerHub. All Rights Reserved</h3>
                <p>Powered by CareerHub</p>
            </div>
      </footer>
     
    </div>
  );
};

export default Footer;
