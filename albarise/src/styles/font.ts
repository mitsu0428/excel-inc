import { Inria_Serif } from "next/font/google";

const InriaSerif = Inria_Serif({
  display: "swap",
  subsets: ["latin"],
  weight: ["700"],
});

export const GoogleFont = {
  inriaClass: InriaSerif.className,
  inriaWithAnotherClass: ` ${InriaSerif.className}`,
};
