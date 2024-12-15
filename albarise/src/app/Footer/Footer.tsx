import { css } from "../../../styled-system/css";
import * as GoogleFont from "../../styles/font";

export const Component = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <span
          className={
            styles.textStyle + GoogleFont.GoogleFont.inriaWithAnotherClass
          }
        >
          2024©ALBARISE Inc.
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: css({
    width: "100%",
    marginTop: "200px",
    padding: "33px",
  }),
  textWrapper: css({
    textAlign: "center",
    height: "23px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  textStyle: css({
    fontSize: "13px",
    color: "#fff",
    "@media screen and (max-width: 768px)": {
      fontSize: "10px",
    },
  }),
};
