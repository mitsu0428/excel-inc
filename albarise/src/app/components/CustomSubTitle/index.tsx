import { css } from "../../../../styled-system/css";
import * as GoogleFont from "../../../styles/font";

type Props = {
  text: string;
  fontSize: string;
};
export const Component = (props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1
        className={styles.h2 + GoogleFont.GoogleFont.inriaWithAnotherClass}
        style={{ fontSize: props.fontSize }}
      >
        {props.text}
      </h1>
    </div>
  );
};

const styles = {
  Wrapper: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    width: "100%",
  }),
  h2: css({
    color: "#FFF",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  }),
};
