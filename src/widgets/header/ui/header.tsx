import { Link, useSearchParams } from "react-router-dom";
import { CupTimeLogo, MobileHeader } from "..";
import { HEADER_DATA } from "../../../shared/consts";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import { useContext } from "react";
import {
  CartContext,
  CartContextType,
} from "../../../app/context/cart/cart-context";

export function Header() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [searchParams] = useSearchParams();
  const { cart } = useContext(CartContext) as CartContextType;

  const currentCategoryfromUrl = searchParams.get("category");

  const getActiveCategory = (category: string) => {
    return currentCategoryfromUrl === category ? "text-violet-800" : "";
  };
  return (
    <header className="w-full text-white bg-teal-500 fixed top-0">
      <div className="mx-auto container max-w-[1400px] flex justify-between items-center py-3 px-4 sm:px-12">
        <Link to="/">
          <CupTimeLogo />
        </Link>
        <div className="flex flex-row-reverse items-center gap-4 sm:flex-row md:gap-8">
          <nav>
            {isMobile ? (
              <MobileHeader />
            ) : (
              <ul className="flex items-center gap-6 lg:gap-12">
                {HEADER_DATA.map((item) => (
                  <li
                    key={item.id}
                    className={getActiveCategory(item.category)}
                  >
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <Link
            to="/cart"
            className="bg-[url('/src/widgets/header/ui/images/bag.svg')] bg-center bg-no-repeat w-7 h-7 text-sm text-center text-violet-600 py-2 px-1"
          >
            {cart.length}
          </Link>
        </div>
      </div>
    </header>
  );
}
