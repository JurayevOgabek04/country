import "./card.css";
import { Link } from "react-router-dom"
export const CardLi = ({ data }) => {
  let link = data.name.common
  return (
    <Link className="link__list" to={`/country/${link}`}>
      <li className="list">
        <img className="card__img" src={data.flags.png} />
        <div className="list-box">
          <h2>Name: {data.name.common}</h2>
          <p>Population: {data.population}</p>
          <p>Region: {data.region}</p>
          <span>Capital: {data.capital}</span>
        </div>
      </li>
    </Link>
  );
};



