import { Gafata } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { Noto_Sans_Myanmar } from "next/font/google";
import { Gothic_A1 } from "next/font/google";

const CustomGafata = Gafata({
  weight: "400",
  display: "swap",
  preload: false,
});

const CustomJosefinSansThin = Josefin_Sans({
  weight: "200",
  style: "normal",
  display: "swap",
  preload: false,
});

const CustomJosefinSans = Josefin_Sans({
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
});

const CustomJosefinSansThick = Josefin_Sans({
  weight: "600",
  style: "normal",
  display: "swap",
  preload: false,
});

const CustomNotoSansMyanmar = Noto_Sans_Myanmar({
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
});

const CustomGotchicA1 = Gothic_A1({
  weight: "400",
  style: "normal",
  display: "swap",
  preload: false,
});

export const Font = {
  CustomGafata,
  CustomJosefinSansThin,
  CustomJosefinSans,
  CustomJosefinSansThick,
  CustomNotoSansMyanmar,
  CustomGotchicA1,
};
