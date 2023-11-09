import ReactSlider from 'react-slider';
import './Hygrometer.css';

import { ClimateContext } from '../../context/ClimateContext';
import { useContext } from 'react';

function Hygrometer() {
  const {humidity, setHumidity} = useContext(ClimateContext);

  //console.log('humidity',humidity)

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {setHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
