"use client";

import { css } from "../../../styled-system/css";
import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import LogoSimpleImage from "../../../public/logo-simple.png";
import LogoSpImage from "../../../public/assets/sp/logo-sp.png";

type Props = {
  width?: string;
  height?: string;
};

export const LogoSp = ({ width, height }: Props) => (
  <Image
    src={LogoSpImage}
    alt="logo"
    className={styles.common + " " + styles.sp}
    style={{ width, height }}
  />
);

export const LogoPc = ({ width, height }: Props) => (
  <Image
    src={LogoImage}
    alt="logo"
    className={styles.common + " " + styles.pc}
    style={{ width, height }}
  />
);

export const LogoPcSimple = ({ width, height }: Props) => (
  <Image
    src={LogoSimpleImage}
    alt="logo"
    className={styles.common + " " + styles.pc}
    style={{ width, height }}
  />
);

const styles = {
  common: css({ width: "100%", height: "auto" }),
  threeStrings: css({ width: "auto" }),
  sp: css({
    display: "none",
    "@media screen and (max-width: 768px)": {
      display: "block",
    },
  }),
  pc: css({
    display: "block",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  }),
};
