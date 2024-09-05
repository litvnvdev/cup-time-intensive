import { useState } from "react";
import { HEADER_DATA } from "../../../shared/consts";
import { CloseIcon, Hamburger } from "..";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <ul className="bg-teal-500 bg-opacity-95 top-[66px] w-full right-0 absolute flex flex-col gap-4 items-center px-8 py-12 rounded-xl">
          {HEADER_DATA.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
          <button onClick={handleHamburger} className="absolute top-7 right-7">
            <CloseIcon />
          </button>
        </ul>
      ) : (
        <button onClick={handleHamburger}>
          <Hamburger />
        </button>
      )}
    </div>
  );
}
