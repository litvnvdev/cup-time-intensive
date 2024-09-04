import { TelegramIcon, VkontakteIcon, YoutubeIcon } from "..";
import { HEADER_DATA } from "../../../shared/consts";
import { CupTimeLogo } from "../../header";

//TODO: relocate CupTimeLogo to shared layer

const FOOTER_ICONS_DATA = [
  {
    id: 1,
    icon: <TelegramIcon />,
  },
  {
    id: 2,
    icon: <YoutubeIcon />,
  },
  {
    id: 3,
    icon: <VkontakteIcon />,
  },
];

export function Footer() {
  return (
    <footer className="bg-teal-500 text-white">
      <div className="flex flex-col gap-10 py-10 px-4 sm:px-12">
        <CupTimeLogo />
        <ul className="flex flex-col gap-4">
          {HEADER_DATA.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div className="flex flex-col gap-4">
          <a href="mailto:CUPTIME@gmail.com">CUPTIME@gmail.com</a>
          <ul className="flex gap-4 items-center">
            {FOOTER_ICONS_DATA.map(({ icon, id }) => (
              <li key={id}>
                <a href="#">{icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p>©CUPTIME, 2024</p>
          <ul className="flex flex-col gap-1">
            <li>
              Designer: <a href="#">Anastasia Ilina</a>
            </li>
            <li>
              Developer:{" "}
              <a href="https://t.me/maksimlitvinov_v" target="_blank">
                Maksim Litvinov
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
