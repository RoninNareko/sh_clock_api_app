import React, { useEffect, useState } from "react";
import axios from "axios";

import Clock from "./components/Clock/Clock";
import { FETCH_DELAY, fetchURL } from "./App.constants";

import "./App.css";
import Semicircle from "./components/Semicircle/Semicircle";

const App = () => {
  const [clockData, setClockData] = useState();

  const fetchClockTime = async () => {
    const fetchTimeInterval = setInterval(async () => {
      try {
        const res = await axios.get(fetchURL);
        const { data } = res;

        setClockData(data);
      } catch (e) {
        console.log(e);
        clearInterval(fetchTimeInterval);
      }
    }, FETCH_DELAY);
  };

  useEffect(() => {
    fetchClockTime();
  }, []);

  if (clockData) {
    const { hour, minute, seconds } = clockData;

    return (
      <div className="App">
        <Clock seconds={seconds} minute={minute} hour={hour} />
        <Semicircle />
      </div>
    );
  }
  return <h1>initialization...</h1>;
};

export default App;
