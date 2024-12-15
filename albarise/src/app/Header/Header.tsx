import { css } from "../../../styled-system/css";
import { Logo } from "../constants/imageComponent";

export const Component = () => {
  return (
    <div className={styles.Wrapper}>
      <Logo
        width="181px"
        height="44px"
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
    padding: "40px",
  }),
};
