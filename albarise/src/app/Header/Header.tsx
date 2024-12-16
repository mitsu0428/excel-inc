import { css } from "../../../styled-system/css";
import { LogoPc, LogoSp } from "../constants/imageComponent";

export const Component = () => {
  return (
    <div className={styles.Wrapper}>
      <LogoPc
        width="181px"
        height="44px"
      />
      <LogoSp
        width="126px"
        height="93px"
      />
    </div>
  );
};

const styles = {
  Wrapper: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    width: "100%",
    padding: "32px",
    "@media screen and (max-width: 768px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  }),
};
