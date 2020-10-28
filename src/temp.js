import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {

  const [nazivPodjetja, setNazivPodjetja] = useState('');
  const [ime, setIme] = useState('');
  const [priimek, setPriimek] = useState('');
  const [ulica, setUlica] = useState('');
  const [hisnaSt, setHisnaSt] = useState('');
  const [davcnaSt, setDavcnaSt] = useState('');
  const [zavezanciList, setZavezanciList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getZavezanci').then((response) => {
      setZavezanciList(response.data);
    });
  });

  const submit = () => {
    Axios.post('http://localhost:3001/api/insertZavezanec', {
      racunovodstvoId: 1,
      krajId: 1,
      nazivPodjetja: nazivPodjetja,
      ime: ime,
      priimek: priimek,
      ulica: ulica,
      hisnaSt: hisnaSt,
      davcnaSt: davcnaSt
    }).then(() => {
      setZavezanciList([...zavezanciList, {
        naziv_podjetja: nazivPodjetja,       
        ime: ime,
        priimek: priimek,
        ulica: ulica,
        hisna_st: hisnaSt,
        davcna_st: davcnaSt
      }])
    });
  };

  const deleteZavezanec = () => {
    Axios.delete('http://localhost:3001/api/deleteZavezanec')
  }


  return (
    <div>
      <h1>Stranke</h1>
        <div style={{display: "flex", flexDirection: "column", width: "50%", alignItems: "center"}}>
          <label>Naziv podjetja:</label>
          <input type="text" name="nazivPodjetja" onChange={(e) => { setNazivPodjetja(e.target.value) }}></input>
          <label>Ime:</label>
          <input type="text" name="ime" onChange={(e) => { setIme(e.target.value) }}></input>
          <label>Priimek:</label>
          <input type="text" name="priimek" onChange={(e) => { setPriimek(e.target.value) }}></input>
          <label>Ulica:</label>
          <input type="text" name="ulica" onChange={(e) => { setUlica(e.target.value) }}></input>
          <label>Hišna številka:</label>
          <input type="text" name="hisnaSt" onChange={(e) => { setHisnaSt(e.target.value) }}></input>
          <label>Davčna številka:</label>
          <input type="text" name="davcnaSt" onChange={(e) => { setDavcnaSt(e.target.value) }}></input>
          <button onClick={submit}>Dodaj</button>
        </div>

        <div>
          {zavezanciList.map(item => {
            return (
              <div style={{border: "1px solid black", marginBottom: "1em"}}>
                <h2>{item.naziv_podjetja} ({item.ime}, {item.priimek})</h2>
                <button>Izbriši</button>
              </div>
            )
          })}
        </div>
    </div>
  );
}

export default App;
