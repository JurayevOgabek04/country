import "./country.css";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";



export const Country = () => {
    const link = useParams().link
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${link}`)
            .then((res) => res.json(res))
            .then((data) => setData(data[0]))
            .catch(error => console.log("error"))

    }, [link])
    console.log(data.languages);

    return (
        <div className="country__site">
            <img className="country__flag" src={data?.flags?.svg} />
            <div className="country">
                <h2 className="countyr__capital">{data.name?.common}</h2>
                <div className="country__inner">
                    <div>
                        <p className="country__subtitle">Native Name: {data?.name?.nativeName[Object.keys(data.name.nativeName)[0]].common}</p>
                        <p className="country__subtitle">Population : {data.population}</p>
                        <p className="country__subtitle">Region: {data.region} </p>
                        <p className="country__subtitle">Sub Region: {data.subregion}</p>
                        <p className="country__subtitle">Capital: {data.capital}</p>
                    </div>

                    <div>
                        <p>Top Level Domain: {data.tld}</p>
                        {
                            data.currencies && <p>Currencies: {data.currencies[Object.keys(data.currencies)].name}</p>
                        }
                        {
                            data.languages && <p>Languages: {data?.languages[Object.keys(data.languages)[0]]} </p>
                        }
                    </div>
                </div>

                <div className="country__border">
                    <h4>Border Countries: </h4>
                    <div className="btn__borders">
                        {
                            data?.borders && data?.borders?.map((elm) => <button className="country__btn" key={elm}>{elm}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
} 