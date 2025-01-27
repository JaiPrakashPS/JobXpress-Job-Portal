import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By JobCradle.</div>
      <div>
        <Link to={"https://www.facebook.com/people/Jai-Prakash/pfbid05n27tnqwjwyt93JqLS2d7uvUqdefz1yNAQTqf4TDc2zVCwHadsg4yqGUjvDidXaXl/?rdid=WnSx7vc01GU7f37q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1647pHSCZq%2F"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://linkedin.com/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/__jai._.prakash__/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;