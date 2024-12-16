import { css } from "../../../../styled-system/css";
import * as GoogleFont from "../../../styles/font";

type Props = {
  text: string;
  fontSize: string;
  textAlign?: "left" | "center" | "right";
};
export const Component = (props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h2
        className={styles.h2 + GoogleFont.GoogleFont.inriaWithAnotherClass}
        style={{ textAlign: props.textAlign, fontSize: props.fontSize }}
      >
        {props.text}
      </h2>
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
    width: "100%",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  }),
};
