"use client";
import React from "react";

import { css } from "../../styled-system/css";
import * as Header from "./Header/Header";
import * as Contents from "./Contents";
import * as Footer from "./Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header.Component />
      <Contents.Component />
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
