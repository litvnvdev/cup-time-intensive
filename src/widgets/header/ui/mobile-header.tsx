import { useState } from "react";
import { HEADER_DATA } from "../../../shared/consts";
import { Hamburger } from "..";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleHamburger}>
        <Hamburger />
      </button>
      {isOpen && (
        <ul className="max-w-fit w-full bg-teal-500 right-0 absolute flex flex-col gap-4 items-center px-8 py-4 rounded-xl">
          {HEADER_DATA.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
