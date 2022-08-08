import { useEffect, useRef, useState } from "react";
import "./search.css";
export const Search = ({ setSearch, setSelect }) => {

  return (
    <div className="container">
      <div className="search-box">
        <input onChange={(evt) => setSearch(evt.target.value)} className="input" type="search" placeholder="search"></input>
        <select onChange={(evt) => setSelect(evt.target.value)} className="form-select" defaultValue={""}>
          <option value="" >All</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
        </select>

      </div>
    </div>
  );
};

