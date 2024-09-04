import { CupTimeLogo, MobileHeader } from "..";
import { HEADER_DATA } from "../../../shared/consts";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";

export function Header() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <header className="w-full text-white">
      <div className="max-width-[1392px] bg-teal-500 py-3 px-4 sm:px-12 flex justify-between items-center">
        <a>
          <CupTimeLogo />
        </a>
        <div className="flex flex-row-reverse items-center gap-4 sm:flex-row md:gap-8">
          <nav>
            {isMobile ? (
              <MobileHeader />
            ) : (
              <ul className="flex items-center gap-12">
                {HEADER_DATA.map((item) => (
                  <li key={item.id}>
                    <a href="#">{item.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </nav>
          <a
            href="#"
            className="bg-[url('/src/widgets/header/ui/images/bag.svg')] bg-center bg-no-repeat w-7 h-7 text-sm text-center text-violet-600 py-2 px-1"
          >
            6
          </a>
        </div>
      </div>
    </header>
  );
}
