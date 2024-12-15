"use client";

import { css } from "../../../styled-system/css";
import Image from "next/image";
import LogoImage from "../../../public/logo.png";
import LogoSimpleImage from "../../../public/logo-simple.png";

type Props = {
  width?: string;
  height?: string;
};

export const Logo = ({ width, height }: Props) => (
  <Image
    src={LogoImage}
    alt="logo"
    className={styles.common}
    style={{ width, height }}
  />
);

export const LogoSimple = ({ width, height }: Props) => (
  <Image
    src={LogoSimpleImage}
    alt="logo"
    className={styles.common}
    style={{ width, height }}
  />
);

const styles = {
  common: css({ width: "100%", height: "auto" }),
  threeStrings: css({ width: "auto" }),
};
