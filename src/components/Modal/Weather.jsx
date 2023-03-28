import { getWeather } from "api/getWeather";
import { useEffect, useState } from "react";

import css from './Weather.module.css';
import { CiTempHigh } from 'react-icons/ci';

const Weather = ({city}) => {
  const [state, setState] = useState('');


  useEffect(() => {
    getWeather(city).then(response => {
      console.log(response);
      setState({
        temp: response.current.temp_c,
        feelTemp: response.current.feelslike_c,
        condition: response.current.condition.text,
        illustration: response.current.condition.icon,
      });
      // console.log(state);
    })
  }, [city, setState])




  return <div className={css.container}>
    {/* <p>This is the weather in {city} right now</p> */}
    <div className={css.condition}>
      <img src={state.illustration} alt="condition icon"/>
      <p>{state.condition}</p>
    </div>
    <div className={css.temp}>
      <p>
        <CiTempHigh className={css.icon} /> {state.temp}° С</p>
      <p>Feels like {state.feelTemp}° С</p>
    </div>
  </div>
}


export default Weather;

// CiTempHigh