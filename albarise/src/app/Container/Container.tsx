import { css } from "../../../styled-system/css";
import * as GoogleFont from "../../styles/font";
import { LogoSimple } from "../constants/imageComponent";

export const Component = () => {
  // const data = useContainer();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.IntroWrapper1}>
        <h2 className={styles.h2 + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          We are ALBARISE Inc.
        </h2>
      </div>
      <div className={styles.IntroWrapper2}>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          Chief Executive Officer / Ruiji Kawatani
        </p>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          Chief Operating Officer / Gaku Hayashi
        </p>
      </div>

      <div className={styles.LogoWrapper}>
        <LogoSimple
          width="44px"
          height="44px"
        />
      </div>

      <div className={styles.secondWrapper}>
        <h2 className={styles.h2 + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          WEBSITE UNDER CONSTRUCTION.
        </h2>
      </div>

      <div className={styles.dividerWrapper}>
        <div className={styles.divider} />
      </div>

      <div className={styles.contactWrapper}>
        <p
          className={
            styles.pContact + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          <a href="mailto:contact@albarise.jp">contact@albarise.jp</a>
        </p>
      </div>

      <div className={styles.addressWrapper}>
        <p
          className={
            styles.pSmall + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Adress
        </p>
        <p
          className={
            styles.pSmall + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Japan, Tokyo, Minami-Aoyama, 5-12-27, WISE512Building 3F
        </p>
      </div>
    </div>
  );
};

const styles = {
  Wrapper: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: "40px",
  }),
  IntroWrapper1: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  IntroWrapper2: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "40px",
    gap: "5px",
  }),
  LogoWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
  }),
  secondWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
  }),
  dividerWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "19px",
  }),
  contactWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  }),
  addressWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  }),
  h2: css({
    color: "#fff",
    fontSize: "30px",
    fontWeight: "700",
    fontStyle: "normal",
    "@media screen and (max-width: 768px)": {
      fontSize: "24px",
    },
  }),
  p: css({
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    fontStyle: "normal",
    "@media screen and (max-width: 768px)": {
      fontSize: "16px",
    },
  }),
  pSmall: css({
    color: "#fff",
    fontSize: "16px",
    fontWeight: "700",
    "@media screen and (max-width: 768px)": {
      fontSize: "14px",
    },
  }),
  pContact: css({
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    fontStyle: "normal",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationSkipInk: "auto",
    textDecorationThickness: "auto",
    textUnderlineOffset: "auto",
    textUnderlinePosition: "from-font",
    "@media screen and (max-width: 768px)": {
      fontSize: "16px",
    },
  }),
  divider: css({
    width: "466px",
    height: "1px",
    backgroundColor: "#fff",
    "@media screen and (max-width: 768px)": {
      width: "300px",
    },
  }),
};
