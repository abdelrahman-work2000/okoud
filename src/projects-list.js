import atamasaken from "./assets/projects/atamasaken.webp";
import shaghlni from "./assets/projects/shaghlni.webp";
import sulah from "./assets/projects/sulah.webp";

import { v4 } from "uuid";

export const projectList = [
  {
    id: v4(),
    title: "جمعية عطاء و نماء لتنمية مساكن",
    image: atamasaken,
    link: "https://atamasaken.sa",
  },
  { id: v4(), title: "شغلني", image: shaghlni, link: "https://shaghalni.sa" },
  { id: v4(), title: "سيولة", image: sulah, link: "https://sulah.sa" },
];
