import { ClockPropsTypes } from "./Clock.types";
import { useEffect, useState } from "react";
import { degrees } from "./Clock.constants";

import classNames from "classnames";
import styles from "./Clock.module.scss";

const Clock = ({ seconds, minute, hour }: ClockPropsTypes) => {
  const cx = classNames.bind(styles);

  const [clockSeconds, setClockSeconds] = useState<number>(0);
  const [clockMinutes, setClockMinutes] = useState<number>(0);
  const [clockHours, setClockHours] = useState<number>(0);

  useEffect(() => {
    setClockHours(hour * 30);
    setClockSeconds(seconds * degrees);
    setClockMinutes(minute * degrees);
  }, [seconds, minute, hour]);

  return (
    <section>
      <div className={cx(styles.clock)}>
        <div className={cx(styles.hour)}>
          <div
            className={cx(styles.hours)}
            style={{
              transform: `rotateZ(${clockHours}deg)`,
            }}
          ></div>
        </div>

        <div className={cx(styles.minute)}>
          <div
            className={cx(styles.minutes)}
            style={{
              transform: `rotateZ(${clockMinutes}deg)`,
            }}
          ></div>
        </div>

        <div className={cx(styles.second)}>
          <div
            className={cx(styles.seconds)}
            style={{
              transform: `rotateZ(${clockSeconds}deg)`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Clock;
