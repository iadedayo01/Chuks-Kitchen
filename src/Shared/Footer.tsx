import { Link } from "react-router-dom";

// import React from 'react'
interface linksProps {
  name: string;
  route: string;
}

interface socialsProps {
  name: string;
  route: string;
}

const Footer = () => {
  const links: linksProps[] = [
    { name: "Home", route: "/" },
    { name: "Explore", route: "/explore" },
    { name: "My Order", route: "/order" },
    { name: "Account", route: "/account" },
    { name: "Contact", route: "/contact" },
  ];
  const contacts = [
    "+234 801 234 5678",
    "hello@chukskitchen.com",
    "123 Taste Blvd, Lagos, Nigeria",
  ];
  const socials: socialsProps[] = [
    { name: "Facebook", route: "https://facebook.com" },
    { name: "Twitter", route: "https://twitter.com" },
    { name: "Linkedin", route: "https://linkedin.com" },
    { name: "Instagram", route: "https://instagram.com" },
  ];
  return (
    <>
      <div>
        <div className=" px-5 lg:px-20 py-5 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#62412E]">
          <div className=" px-3 flex flex-col">
            <div>
              <h1 className=" text-4xl font-normal text-[#FF7A18] font-['Island_Moments']">
                Chuks Kitchen
              </h1>
              <span className=" text-sm lg:text-2xl text-white font-jost">
                Bringing the authentic flavors of Nigerian home cooking to your
                table, with passion and care.
              </span>
            </div>
          </div>
          <div className=" space-y-2 py-5 px-5 lg:px-10">
            <h1 className=" font-jost text-lg lg:text-2xl font-normal text-white">
              Quick Links
            </h1>
            {links.map((link) => (
              <Link to={link.route}>
                <div>
                  <span className=" text-white text-xs font-normal font-poppins">
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className=" px-5 py-5 lg:px-10">
            <h1 className=" font-jost text-2xl font-normal text-white">
              Contact Us
            </h1>
            {contacts.map((contact) => (
              <div>
                <span className=" text-white text-xs font-normal font-poppins">
                  {contact}
                </span>
              </div>
            ))}
          </div>
          <div className=" px-5 py-5 lg:px-10">
            <h1 className=" font-jost text-2xl font-normal text-white">
              Social Media
            </h1>
            {socials.map((social) => (
              <Link to={social.route}>
                <div>
                  <span className=" text-white text-xs font-normal font-poppins">
                    {social.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" bg-[#62412E] text-center md:px-20">
        <span className=" font-poppins text-xs text-white font-normal">
          &copy; 2020 Lift Media. All rights Reserved{" "}
        </span>
      </div>
    </>
  );
};

export default Footer;
