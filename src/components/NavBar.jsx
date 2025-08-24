import React, { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState(null); // No active by default
  const links = ["About Me", "Experiences", "Projects", "Contact Me"];

  const scrollTo = (id, link) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(link); // Set the active link after scrolling
  };

  return (
    <nav className="navbar">
      {links.map((link) => {
        const id = link.toLowerCase().replace(/\s/g, "-");
        return (
          <a
            key={link}
            href={`#${id}`}
            className={active === link ? "active" : ""}
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor jump
              scrollTo(id, link);
            }}
          >
            {link}
          </a>
        );
      })}
    </nav>
  );
}
