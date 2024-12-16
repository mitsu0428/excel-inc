import { css } from "../../../styled-system/css";
import * as GoogleFont from "../../styles/font";
import * as CustomSubTitle from "../components/CustomSubTitle";
import * as CustomTitle from "../components/CustomTitle";
import { LogoSp } from "../constants/imageComponent";

export const Component = () => {
  return (
    <div className={styles.Wrapper}>
      {/* ロゴエリア */}
      <div className={styles.LogoWrapper}>
        <LogoSp
          width="126px"
          height="93px"
        />
      </div>

      <div className={styles.Title1}>
        <CustomTitle.Component
          fontSize="21px"
          textAlign="center"
          text="WEBSITE UNDER CONSTRUCTION."
        />
      </div>

      <div className={styles.Title2}>
        <CustomTitle.Component
          fontSize="25px"
          text="We are ALBARISE Inc."
        />
      </div>

      <div className={styles.IntroWrapper}>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          CEO / Ruiji Kawatani
        </p>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          COO / Gaku Hayashi
        </p>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          Executive Officer / Kenta Higuchi
        </p>
      </div>

      <div className={styles.BusinessDomain}>
        <CustomSubTitle.Component
          fontSize="25px"
          text="Business Domain"
        />
      </div>

      <div className={styles.BusinessDomainContents}>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          -TikTok Live Agency JAPAN & MALAYSIA
        </p>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          -PRODUCTION
        </p>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          -ADVERTISING
        </p>
        <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
          -MARKETING
        </p>
      </div>

      {/* Mailエリア */}
      <div className={styles.contactWrapper1}>
        <p
          className={
            styles.pCenter + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Mail
          <br />
          <a href="mailto:contact@albarise.jp">contact@albarise.jp</a>
        </p>
      </div>

      {/* Telエリア */}
      <div className={styles.contactWrapper2}>
        <p
          className={
            styles.pCenter + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Tel
          <br />
          <a href="tel:03-6824-4903">03-6824-4903</a>
        </p>
      </div>

      {/* 住所エリア */}
      <div className={styles.contactWrapper2}>
        <p
          className={
            styles.pCenter + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Address
          <br />
        </p>
        <p
          className={
            styles.pCenter + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Japan, Tokyo, Minami-Aoyama,
          <br />
          5-12-27, WISE512Building 3F
        </p>
      </div>
    </div>
  );
};

const styles = {
  Wrapper: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  Title1: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
  }),
  Title2: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "70px",
    padding: "0 50px",
  }),
  IntroWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    gap: "11px",
    marginTop: "28px",
    padding: "0 50px",
  }),
  BusinessDomain: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginTop: "35px",
    padding: "0 50px",
  }),
  BusinessDomainContents: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginTop: "21px",
    padding: "0 50px",
  }),
  contactWrapper1: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "35px",
  }),
  contactWrapper2: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
  }),
  p: css({
    width: "100%",
    color: "#fff",
    fontSize: "13px",
    fontWeight: "700",
    fontStyle: "normal",
  }),
  pCenter: css({
    width: "100%",
    color: "#fff",
    fontSize: "13px",
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
  }),
};
