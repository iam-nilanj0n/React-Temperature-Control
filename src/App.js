import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(15);
  const [tempColor, setTempColor] = useState({ backgroundColor: 'rgb(0, 132, 255)' });
  const [r, setR] = useState(0)
  const [g, setG] = useState(0)
  const [b, setB] = useState(0)


  const colorChangeHandler = (e, t) => {

    if (t === 1) {
      if (temperature < 30) {
        setTemperature(temperature + 1)
        setG(g + 4)
        setB(2 * g)
        setTempColor({ backgroundColor: `rgb(${r}, ${g}, ${b})` })
      }
      if (temperature >= 30) {
        setTemperature(temperature + 1)
        setG(g - 10);
        setTempColor({ backgroundColor: `rgb(${r}, ${g}, ${b})` })
      }
    }
    if (t === 0) {
      if (temperature < 30) {
        setTemperature(temperature - 1)
        setG(g - 4)
        setB(2 * g)
        setTempColor({ backgroundColor: `rgb(${r}, ${g}, ${b})` })
      }
      if (temperature >= 30) {
        setTemperature(temperature - 1)
        setG(g + 10);
        setTempColor({ backgroundColor: `rgb(${r}, ${g}, ${b})` })
      }
    }

  }

  useEffect(() => {
    if(temperature===29){
      setR(0)
      setG(184)
      setB(255)
      setTempColor({ backgroundColor: `rgb(0, 184, 255)` })
    }
    if (temperature ===15) {
      setR(0)
      setG(132)
      setB(255)
      setTempColor({ backgroundColor: `rgb(0, 132, 255)` })
    }
    if (temperature === 30) {
      setR(255)
      setG(255)
      setB(0)
      setTempColor({ backgroundColor: `rgb(255, 225, 0)` })
    }
  }, [r, g, b, temperature, tempColor])
  return (
    <div className="App">
      <section className='container' >
        <div className='circle' style={tempColor}>
          <p>{temperature}<sup>o</sup>C</p>
        </div>
        <div className='buttonSection'>
          <button onClick={(e) => colorChangeHandler(e, 1)}>+</button>
          <button onClick={(e) => colorChangeHandler(e, 0)}>-</button>
        </div>
      </section>
    </div>
  );
}

export default App;
