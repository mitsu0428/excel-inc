"use client";
import React from "react";

import { css } from "../../styled-system/css";
import * as Header from "./Header/Header";
import * as PC from "./PCContainer";
import * as SP from "./SPContainer";
import * as Footer from "./Footer/Footer";

export default function Home() {
  const [isPc, setIsPc] = React.useState(true);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsPc(e.matches);
    };
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={styles.container}>
      {isPc && <Header.Component />}
      {isPc && <PC.Component />}
      {!isPc && <SP.Component />}
      <Footer.Component />
    </div>
  );
}

const styles = {
  container: css({
    backgroundColor: "#292929",
    width: "100%",
    margin: "0 auto",
    height: "auto",
    minHeight: "100vh",
  }),
};
