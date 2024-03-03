import { Gafata } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

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

export const Font = {
  CustomGafata,
  CustomJosefinSansThin,
  CustomJosefinSans,
  CustomJosefinSansThick,
};
