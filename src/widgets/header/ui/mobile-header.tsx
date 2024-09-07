import { useState } from "react";
import { HEADER_DATA } from "../../../shared/consts";
import { Hamburger } from "..";
import { Link, useSearchParams } from "react-router-dom";
import { CloseIcon } from "../../../shared/ui/close-icon";

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const currentCategoryfromUrl = searchParams.get("category");

  const getActiveCategory = (category: string) => {
    return currentCategoryfromUrl === category ? "text-violet-800" : "";
  };

  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <ul className="bg-teal-500 bg-opacity-95 top-[66px] w-full right-0 absolute flex flex-col gap-4 items-center px-8 py-12 rounded-xl">
          {HEADER_DATA.map((item) => (
            <li className={getActiveCategory(item.category)} key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <button onClick={handleHamburger} className="absolute top-7 right-7">
            <CloseIcon width="20" height="20" className="text-slate-100" />
          </button>
        </ul>
      ) : (
        <button onClick={handleHamburger}>
          <Hamburger className="text-slate-100" />
        </button>
      )}
    </div>
  );
}
