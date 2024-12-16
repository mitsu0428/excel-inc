import { css } from "../../../styled-system/css";
import * as GoogleFont from "../../styles/font";
import * as CustomSubTitle from "../components/CustomSubTitle";
import * as CustomTitle from "../components/CustomTitle";
import { LogoSimple } from "../constants/imageComponent";

export const Component = () => {
  // const data = useContainer();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftContainer}>
        {/* Titleエリア */}
        <div className={styles.TitleWrapper}>
          <CustomTitle.Component
            fontSize="30px"
            text="ALBARISE Inc."
          />
        </div>

        {/* Introductionエリア */}
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
            fontSize="24px"
            text="Business Domain"
          />
        </div>

        {/* BusinessDomainエリア */}
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
          <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
            Mail
            <br />
            <a href="mailto:contact@albarise.jp">contact@albarise.jp</a>
          </p>
        </div>

        {/* Telエリア */}
        <div className={styles.contactWrapper2}>
          <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
            Tel
            <br />
            <a href="tel:03-6824-4903">03-6824-4903</a>
          </p>
        </div>

        {/* 住所エリア */}
        <div className={styles.contactWrapper2}>
          <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
            Address
            <br />
          </p>
          <p className={styles.p + GoogleFont.GoogleFont.inriaWithAnotherClass}>
            Japan, Tokyo, Minami-Aoyama, 5-12-27, WISE512Building 3F
          </p>
        </div>
      </div>

      <div className={styles.RightContainer}>
        <div>
          <div className={styles.LogoWrapper}>
            <LogoSimple
              width="44px"
              height="44px"
            />
          </div>
          <div className={styles.secondWrapper}>
            <CustomTitle.Component
              text="WEBSITE UNDER CONSTRUCTION."
              fontSize="30px"
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

const styles = {
  Wrapper: css({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "0 87px 0 87px",
  }),
  // ここから左側
  LeftContainer: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    width: "50%",
  }),
  TitleWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginTop: "25px",
  }),
  IntroWrapper: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    gap: "5px",
    marginTop: "19px",
  }),
  BusinessDomain: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    marginTop: "35px",
  }),
  BusinessDomainContents: css({
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    gap: "5px",
    marginTop: "21px",
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
  // ここから右側
  RightContainer: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
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
