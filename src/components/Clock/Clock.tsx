import classNames from "classnames";

import styles from "./Clock.module.scss";
import { useEffect, useState } from "react";

export default function Clock() {
  const cx = classNames.bind(styles);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const deg = 6;
  useEffect(() => {
    setInterval(() => {
      const day = new Date();
      const hours = day.getHours() * 30;
      const minutes = day.getMinutes() * deg;
      const seconds = day.getSeconds() * deg;
      setHours(hours);
      setSeconds(seconds);
      setMinutes(minutes);
    }, 0);
  }, []);
  return (
    <section>
      <div className={cx(styles.clock)}>
        <div className={cx(styles.hour)}>
          <div
            className={cx(styles.hours)}
            style={{
              transform: `rotateZ(${hours + minutes / 2}deg)`,
            }}
          ></div>
        </div>

        <div className={cx(styles.minute)}>
          <div
            className={cx(styles.minutes)}
            style={{
              transform: `rotateZ(${minutes}deg)`,
            }}
          ></div>
        </div>

        <div className={cx(styles.second)}>
          <div
            className={cx(styles.seconds)}
            style={{
              transform: `rotateZ(${seconds}deg)`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
