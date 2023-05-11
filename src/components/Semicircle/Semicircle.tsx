import classNames from "classnames";
import styles from "./Semicircle.module.scss";

const Semicircle = () => {
  const cx = classNames.bind(styles);
  return <div className={cx(styles.semicircle)}></div>;
};

export default Semicircle;
