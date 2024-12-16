"use client";
import React from "react";

import { css } from "../../styled-system/css";
import * as Header from "./Header/Header";
import * as PC from "./PCContainer";
import * as SP from "./SPContainer";
import * as Footer from "./Footer/Footer";

export default function Home() {
  const [isSp, setIsSp] = React.useState(true);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 767px)");
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsSp(e.matches);
    };
    mediaQueryList.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={styles.container}>
      {!isSp && <Header.Component />}
      {!isSp && <PC.Component />}
      {isSp && <SP.Component />}
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
