import React from "react";
import { Code as CodeIcon } from "react-feather";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="logo">
          <span className="logo-span1">max</span>
          <CodeIcon size={24} color="red" className="logo-span3" />

          <span className="logo-span2">Chain</span>
        </div>
        <p className="text-slate-600 px-5">All rights reserved by Jobinson</p>
      </div>
    </footer>
  );
};

export default Footer;
