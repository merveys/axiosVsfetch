import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [countries, setCountry] = useState([]);

  // useEffect( () => {
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then(response => response.json())
  //   .then( response => setCountry(response));
  // }, []);

  useEffect( () => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => setCountry(response.data))
    .catch(error => console.log(error));
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
