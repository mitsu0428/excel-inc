import { css } from "../../../styled-system/css";
import * as GoogleFont from "../../styles/font";
import * as CustomSubTitle from "../components/CustomSubTitle";
import * as CustomTitle from "../components/CustomTitle";
import { LogoPcSimple } from "../constants/imageComponent";

export const Component = () => {
  // const data = useContainer();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.SpOnlyIntro}>
        <CustomTitle.Component
          overRideFontSize="21px"
          textAlign="center"
          text="WEBSITE UNDER CONSTRUCTION."
        />
      </div>

      <div className={styles.LeftContents}>
        <div className={styles.TitleWrapper}>
          <CustomTitle.Component text="We are ALBARISE Inc." />
        </div>

        <MemberWrapper />
        <BusinessDomain />
        <Contact />
      </div>

      <div className={styles.RightContents}>
        <div>
          <div className={styles.LogoWrapper}>
            <LogoPcSimple
              width="44px"
              height="44px"
            />
          </div>
          <div className={styles.secondWrapper}>
            <CustomTitle.Component
              text="WEBSITE UNDER CONSTRUCTION."
              textAlign="center"
            />
          </div>
          <div className={styles.dividerWrapper}>
            <div className={styles.divider} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberWrapper = () => {
  return (
    <div className={styles.MemberWrapper}>
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
  );
};

const BusinessDomain = () => {
  return (
    <>
      <div className={styles.BusinessDomain}>
        <CustomSubTitle.Component
          fontSize="24px"
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
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className={styles.contactWrapper1}>
        <p
          className={
            styles.pContact + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Mail
          <br />
          <a href="mailto:contact@albarise.jp">contact@albarise.jp</a>
        </p>
      </div>
      <div className={styles.contactWrapper2}>
        <p
          className={
            styles.pContact + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Tel
          <br />
          <a href="tel:03-6824-4903">03-6824-4903</a>
        </p>
      </div>
      <div className={styles.contactWrapper2}>
        <p
          className={
            styles.pContact + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Address
          <br />
        </p>
        <p
          className={
            styles.pContact + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          Japan, Tokyo, Minami-Aoyama, 5-12-27, WISE512Building 3F
        </p>
      </div>
    </>
  );
};

const styles = {
  Wrapper: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0 87px 0 87px",
    "@media screen and (max-width: 768px)": {
      flexDirection: "column",
      padding: "0 32px",
    },
  }),
  SpOnlyIntro: css({
    display: "none",
    "@media screen and (max-width: 768px)": {
      display: "block",
      marginTop: "70px",
    },
  }),
  LeftContents: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    width: "50%",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  }),
  TitleWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginTop: "25px",
    "@media screen and (max-width: 768px)": {
      marginTop: "70px",
      marginLeft: "70px",
    },
  }),
  MemberWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    gap: "5px",
    marginTop: "19px",
    "@media screen and (max-width: 768px)": {
      marginTop: "28px",
      marginLeft: "70px",
      gap: "10px",
    },
  }),
  BusinessDomain: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginTop: "35px",
    "@media screen and (max-width: 768px)": {
      marginTop: "28px",
      marginLeft: "70px",
    },
  }),
  BusinessDomainContents: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    gap: "5px",
    marginTop: "21px",
    "@media screen and (max-width: 768px)": {
      marginLeft: "70px",
      gap: "0px",
    },
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
  RightContents: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  }),
  LogoWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  p: css({
    width: "100%",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    fontStyle: "normal",
    "@media screen and (max-width: 768px)": {
      fontSize: "13px",
    },
  }),
  pContact: css({
    width: "100%",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "700",
    fontStyle: "normal",
    "@media screen and (max-width: 768px)": {
      fontSize: "13px",
      textAlign: "center",
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
