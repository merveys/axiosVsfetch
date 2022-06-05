import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [countries, setCountry] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then( response => setCountry(response));
  }, []);

  return (
    <div className="App">
      <h1>Get data with fetch()</h1>
      <h1>Countries</h1>
        {countries.map(country => {
          return (
            <div>
              <h2>{country.name.common}</h2>
              <h4>{country.region}</h4>
              <p>
                <img 
                src={country.flags.png} 
                alt=""
                style={ {width: "100px"} }
                />
              </p>
              </div>

            )
        })}
    </div>
  );
}

export default App;
