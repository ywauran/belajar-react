import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between text-white py-4 px-5">
      <h1 className="font-bold">
        <span className="text-[#C93D8D]">NFT</span> Everywhere
      </h1>
      <nav className="font-semibold">
        <ul className="flex items-center space-x-3">
          <li>Explore</li>
          <li>Stats</li>
          <li>About Me</li>
          <li>
            <button className="bg-[#DADADA] px-3 py-1 rounded-md">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
